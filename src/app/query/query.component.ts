


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QueryItem, Field, Operator, query, QueryFields } from '../app.model';

@Component({
    selector: 'query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
    @Input() fields!: QueryItem;
    @Output() query: EventEmitter<{ [key: string]: query }> = new EventEmitter<{ [key: string]: query }>();

    items = this.fields;
    queries: QueryItem[] = [];
    chosenQueries: QueryFields = {};
    queryList: any = {};
    hasPossibleFields: boolean = true;

    ngOnInit(): void {
        this.queries = [this.filterPossibleFields()];
    }

    addNewField() {
        if (this.queryList[this.queries.length - 1]) {
            this.queries.push(this.filterPossibleFields());
        }
        this.updatePossibleFields();
    }

    chosen(chosenQuery: query, index: number) {
        this.queryList[index] = chosenQuery;

        this.updatePossibleFields();
    }

    remove(index: number) {
        this.queries.splice(index, 1);
        for (let i = index; i < Object.keys(this.queryList).length - 1; i++) {
            this.queryList[i] = this.queryList[i + 1];
        }
        delete this.queryList[Object.keys(this.queryList).length - 1];
        this.updatePossibleFields();
    }

    updatePossibleFields() {
        const possibleFields = this.filterPossibleFields();
        this.hasPossibleFields = Object.keys(possibleFields)
            .filter(f => possibleFields[f].isVisible() && !possibleFields[f].isExist()).length > 0;
    }

    filterPossibleFields(): QueryItem {
        const possibleQueries: QueryItem = {};
        this.chosenQueries = {};
        Object.keys(this.queryList).map(q => this.queryList[q]).forEach(q => {
            this.chosenQueries[q.field] = q;
        });

        Object.assign(possibleQueries, this.fields);
        Object.keys(possibleQueries).forEach(field => {
            switch (field) {
                case Field.Team:
                    possibleQueries[field].isVisible = () => this.team();
                    break;
                case Field.CreatedBy:
                    possibleQueries[field].isVisible = () => this.createdBy();
                    break;
                case Field.State:
                    possibleQueries[field].isVisible = () => this.state();
                    break;
                case Field.ID:
                    possibleQueries[field].isVisible = () => this.id();
                    break;
                default:
                    break;
            }
            possibleQueries[field].isExist = () => this.general(field);
        });
        return possibleQueries;
    }

    team(): boolean {
        return !(this.chosenQueries[Field.CreatedBy] || this.chosenQueries[Field.ID]);
    }

    createdBy(): boolean {
        return !(this.chosenQueries[Field.Team]);
    }

    state(): boolean {
        return this.chosenQueries[Field.WorkItemType] && this.chosenQueries[Field.WorkItemType].value === 'Bug';
    }

    id(): boolean {
        return this.chosenQueries[Field.Team] === undefined && (this.chosenQueries[Field.WorkItemType] && this.chosenQueries[Field.WorkItemType].value === 'Backlog');
    }

    general(field: string): boolean {
        return !!this.chosenQueries[field];
    }

    saveQuery() {
        this.query.emit(this.chosenQueries);
        this.chosenQueries = {};
        this.queryList = {};
        this.queries = [this.filterPossibleFields()];
    }
}
