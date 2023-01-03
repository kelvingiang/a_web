import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-pipe',
  templateUrl: './project-pipe.component.html',
  styleUrls: ['./project-pipe.component.scss']
})
export class ProjectPipeComponent implements OnInit {
  typeSummary:number=2;
  typeCurrency:string = 'USD';

  changSummary(value:number){
    this.typeSummary = value;
  
  }

  changCurrency(value:string){
    this.typeCurrency = value;
  
  }
  
  constructor() { }

  ngOnInit() {
  }

}
