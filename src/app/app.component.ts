import { Component } from '@angular/core';
import { Day } from './shared/day.model';
import { Activity } from './shared/activity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'trip-planner';
	startDate = 'February 8 2019';
	days: Day[] = [
		new Day('Toronto', 'New York', 'February 8 2019'),
		new Day('New York', '', 'February 9 2019'),
		new Day('New York', 'Chicago', 'February 10 2019')
	];
	activities: Activity[] = [
		new Activity('Bellavista', 2, 'February 9 2019'),
		new Activity('Lunch', 3, 'February 9 2019'),
		new Activity('Lunch', 4, 'February 10 2019'),
		new Activity('Flying', 6, 'February 10 2019')
	]
	displayActivities = [];
	selectedDay: string; 

	getDate(i) {
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
	}

	addDay() {
		this.days.push(new Day('', '', ''))
	}

	dayClicked(day) {
		this.displayActivities = this.activities.filter(activity => activity.activityDate === day.date);
		this.selectedDay = day;
	}

}
