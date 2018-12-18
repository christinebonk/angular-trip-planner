import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { DayComponent } from './day/day.component';
import { EditDayComponent } from './edit-day/edit-day.component';
import { AddActivityComponent } from './add-activity/add-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    DayComponent,
    EditDayComponent,
    AddActivityComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
