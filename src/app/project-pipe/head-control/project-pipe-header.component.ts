import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-head-control',
    templateUrl: './project-pipe-header.component.html',
    styleUrls: ['./../project-pipe.component.scss']
})

export class ProjectPipeHeadComponent implements OnInit {
    // @Input('typeSummary') typeSummary: number;
    // @Input('typeCurrency') typeCurrency: string;
    summary: number = 2;
    currency: string= 'USD';
    @Output('typeSummaryChange') typeSummaryChange = new EventEmitter<number>();
    @Output('typeCurrencyChange') typeCurrencyChange1 = new EventEmitter<string>();


    summaryArray =[
        {name : 'Small', val : 1 },
        {name : 'Medium', val : 2 },
        {name : 'Full', val:3 }
    ]

    currencyArray =[
        {name : 'USD', val : 'USD' },
        {name : 'VND', val : 'VND' },
        {name : 'EUR', val: 'EUR' }
    ]

    settingSummary(){
       this.typeSummaryChange.emit(this.summary);
    }

    settingCurrency(){
        this.typeCurrencyChange1.emit(this.currency);
    }
    
    constructor() { }



    ngOnInit(): void { }
}
