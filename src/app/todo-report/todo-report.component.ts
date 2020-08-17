import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {IAppSate} from '../store';

@Component({
  selector: 'app-todo-report',
  templateUrl: './todo-report.component.html',
  styleUrls: ['./todo-report.component.css']
})
export class TodoReportComponent implements OnInit {

  @select() todos;
  @select() lastUpdate;
  
    constructor(private ngRedux:NgRedux<IAppSate>) { }
  
    ngOnInit(): void {
     
    }
}
