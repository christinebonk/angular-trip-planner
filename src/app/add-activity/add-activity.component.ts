import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Activity } from '../shared/activity.model';
import { ActivitiesService } from '../services/activities.service';
import { DaysService } from '../services/days.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
	@Output() newActivity = new EventEmitter< Activity >();
	selectedDay: Day; 
	constructor(private aService: ActivitiesService, private dService: DaysService) { 
		//subscribe to updated selected day
		this.dService.daySelected.subscribe((day: Day) => {
	  		this.selectedDay = day;
	  	});	
	}

	timeStringToFloat(time) {
	  var hoursMinutes = time.split(/[.:]/);
	  var hours = parseInt(hoursMinutes[0], 10);
	  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
	  var final = hours + minutes/100;
	  return final;
	}

	onAddActivity(nameInput: HTMLInputElement, timeInput: HTMLInputElement) {
		let time = this.timeStringToFloat(timeInput.value);
		this.aService.addActivity(new Activity(nameInput.value, time, ''), this.selectedDay);
	}


	ngOnInit() {
		this.selectedDay = this.dService.getSelectedDay();
	}

}
