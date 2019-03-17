import { Day } from '../shared/day.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivitiesService } from './activities.service';


@Injectable()
export class DaysService {

	constructor(private aService: ActivitiesService) {}

	daySelected: Day = new EventEmitter<Day>();
	selectedDay: Day;

	private days: Day[] = [
		new Day('Toronto', 'New York', 'Feb 8 2019'),
		new Day('New York', '', 'Feb 9 2019'),
		new Day('New York', 'Chicago', 'Feb 10 2019')
	];

	getDays() {
		return this.days.slice();
	}

	getSelectedDay() {
		return this.selectedDay;
	}

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
	}

}