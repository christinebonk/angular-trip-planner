import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../shared/day.model'

@Component({
  selector: 'app-edit-day',
  templateUrl: './edit-day.component.html',
  styleUrls: ['./edit-day.component.css']
})
export class EditDayComponent implements OnInit {
	@Input() selectedDay: Day;
	


	constructor() { }

	ngOnInit() {
	}

}
