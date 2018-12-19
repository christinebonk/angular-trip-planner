import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Activity } from '../shared/activity.model';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
	@Output() newActivity = new EventEmitter< Activity >();

	timeStringToFloat(time) {
	  var hoursMinutes = time.split(/[.:]/);
	  var hours = parseInt(hoursMinutes[0], 10);
	  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
	  var final = hours + minutes/100;
	  console.log(final);
	  return final;
	}

	addActivity(nameInput: HTMLInputElement, timeInput: HTMLInputElement) {
		let time = this.timeStringToFloat(timeInput.value);
		this.newActivity.emit(new Activity(nameInput.value, time, ''))
	}

  constructor() { }

  ngOnInit() {
  }

}
