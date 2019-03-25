import { Day } from '../shared/day.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivitiesService } from './activities.service';


@Injectable()
export class DaysService {

	constructor(private aService: ActivitiesService) {}

	dayAdded: Day[] = new EventEmitter<Day[]>();
	daySelected: Day = new EventEmitter<Day>();
	selectedDay: Day;
	startDate = 'Feb 8 2019';

	private days: Day[] = [
		new Day('Toronto', 'New York', 'Feb 8 2019', 0),
		new Day('New York', '', 'Feb 9 2019', 1),
		new Day('New York', 'Chicago', 'Feb 10 2019', 2)
	];

	getDays() {
		return this.days.slice();
	}

	getSelectedDay() {
		return this.selectedDay;
	}


	addDay() { //adds a new date to days array
		let newDay = new Day ('', '', '');
		let dayNumber = this.days.length;
		newDay.date = this.getDate(dayNumber);
		this.days.push(newDay);
		this.dayAdded.emit(this.days);
	};

	selectDay(day) {
		this.selectedDay = day;	

		//gives index to selected day
		this.days.forEach((element, index) => {
			if(element === day) {
				this.selectedDay.index = index;
			}
		});

		//emits selected day
		this.daySelected.emit(this.selectedDay);
		this.aService.displayActivities(day);
	};

	getDate(i) { //gets the date based on start date
		const startDate = new Date(this.startDate);
		let date = startDate.setDate(startDate.getDate() + i);
		let selectedDate = new Date(date);
		const monthNames = [
		"Jan", "Feb", "Mar",
		"Apr", "May", "Jun", "Jul",
		"Aug", "Sep", "Oct",
		"Nov", "Dec"
		];
		const dayOfWeek = [ "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"
		]
		const day = selectedDate.getDate();
		const monthIndex = selectedDate.getMonth();
		const weekIndex = selectedDate.getDay();
		return dayOfWeek[weekIndex] + ', ' + monthNames[monthIndex] + ' ' + day;
	};

}