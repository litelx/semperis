import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QueryComponent } from './query/query.component';
import { HistoryComponent } from './history/history.component';
import { FieldItemComponent } from './field-item/field-item.component';

@NgModule({
    declarations: [
        AppComponent,
        QueryComponent,
        HistoryComponent,
        FieldItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
