import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './Pages/to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickedOutsideDirective } from './Shared/Directives/clicked-outside.directive';
import { EditingTaskComponent } from './Pages/editing-task/editing-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ClickedOutsideDirective,
    EditingTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
