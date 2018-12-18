import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
	@Input() day; //should properly define

	@Output() onDayClick = new EventEmitter<number>();


	viewDay() {
		this.onDayClick.emit(this.day);
	}

  constructor() { }

  ngOnInit() {
  }

}
