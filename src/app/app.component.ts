import { Component, OnInit } from '@angular/core';
import { Criteria, QueryItem, Field, query, QueryFields } from './app.model';
import { queryTemplate } from './query-template';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'semperis';
    items = queryTemplate;
    historyItems: query[][] = [];

    ngOnInit(): void {
    }

    addToHistory(query: QueryFields) {
        console.log('save: ', query);
        const queries = Object.keys(query).map(q => { return query[q] })
        this.historyItems.push(queries);
        this.items = queryTemplate;

    }
}
