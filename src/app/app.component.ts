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
	displayActivities: [] = [];
	selectedDay: string; 
	daysAway: string = this.getTimeDiff(this.startDate);

	onNewActivityAdded(activity) {
		activity.activityDate = this.selectedDay.date;
		this.activities.push(activity);
	}

	getTimeDiff(endDate) { //calculates how many days away the trip is
		const date1 = new Date();
		const date2 = new Date(endDate);
		const timeDiff = Math.abs(date2.getTime() - date1.getTime());
		const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
		return diffDays
	}

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
	}

	addDay() { //adds a new date to days array
		this.days.push(new Day('', '', ''))
	}

	dayClicked(day) { //filters the activities for the day clicked
		this.displayActivities = this.activities.filter(activity => activity.activityDate === day.date);
		this.selectedDay = day;
	}

}
