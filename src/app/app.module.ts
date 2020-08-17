import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppSate, rootReducer,INITIAL_STATE} from './store';
import { AppComponent } from './app.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TodoReportComponent } from './todo-report/todo-report.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent,
    TodoReportComponent,
    TodoHomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux:NgRedux<IAppSate>){
    ngRedux.configureStore(rootReducer,INITIAL_STATE);
  }
 }
