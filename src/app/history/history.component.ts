import { Component, Input, OnInit } from '@angular/core';
import { Operator, query } from '../app.model';

@Component({
    selector: 'history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    @Input() queries!: query[][];
    operation = Operator;
    constructor() { }

    ngOnInit(): void {

    }


}
