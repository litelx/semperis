import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QueryItem, Field, Operator, query } from '../app.model';

@Component({
  selector: 'field-item',
  templateUrl: './field-item.component.html',
  styleUrls: ['./field-item.component.scss']
})
export class FieldItemComponent implements OnInit {

    @Input() queryItems!: QueryItem;
    @Output() chosenField: EventEmitter<query> = new EventEmitter<query>();
    @Output() removedField: EventEmitter<query> = new EventEmitter<query>();

    items: string[] = [];
    operator = Operator;
    field = Field;
    query!: query;

    constructor() { }

    ngOnInit(): void {
        this.items = Object.keys(this.queryItems);
        this.query = {
            field: '',
            operation: undefined,
            value: ''
        };
    }

    chosen() {
        this.chosenField.emit(this.query);
    }

    removeField() {    
        this.removedField.emit(this.query);
    }
}
