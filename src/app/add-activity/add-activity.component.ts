import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Activity } from '../shared/activity.model';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
	@Output() newActivity = new EventEmitter< Activity >();

	addActivity(nameInput: HTMLInputElement, timeInput: HTMLInputElement) {
		this.newActivity.emit(new Activity(nameInput.value, timeInput.value, ''))
	}

  constructor() { }

  ngOnInit() {
  }

}
