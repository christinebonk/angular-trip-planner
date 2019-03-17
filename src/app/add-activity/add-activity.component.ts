import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Activity } from '../shared/activity.model';
import { ActivitiesService } from '../services/activities.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
	@Output() newActivity = new EventEmitter< Activity >();

	constructor(private aService: ActivitiesService) { }

	timeStringToFloat(time) {
	  var hoursMinutes = time.split(/[.:]/);
	  var hours = parseInt(hoursMinutes[0], 10);
	  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
	  var final = hours + minutes/100;
	  console.log(final);
	  return final;
	}

	onAddActivity(nameInput: HTMLInputElement, timeInput: HTMLInputElement) {
		let time = this.timeStringToFloat(timeInput.value);
		this.aService.addActivity(new Activity(nameInput.value, time, ''));
	}

  

  ngOnInit() {
  }

}
