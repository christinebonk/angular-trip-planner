import { Component, OnInit  } from '@angular/core';
import { Day } from './shared/day.model';
import { Activity } from './shared/activity.model';
import { ActivitiesService } from './services/activities.service';
import { DaysService } from './services/days.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

	//declare variables
	activities: Activity[] = [];
	title = 'trip-planner';
	startDate = 'Feb 8 2019';
	startDateFormatted = new Date (this.startDate).toISOString().substr(0, 10);;
	tripName: string = 'Your Trip'
	days: Day[] = [];
	displayActivities: [];
	selectedDay= this.days[0];
	daysAway = this.getTimeDiff(this.startDate);
	modalOpen: boolean = false;

	//constructor
	constructor(
		private aService: ActivitiesService, 
		private dService: DaysService) { 

		//subscribe to updated activities
		this.aService.activitiesChanged.subscribe(
	        (updatedActivities: Activity[]) => {
	        	this.activities = updatedActivities;
		    	}
	    );

		//subscribe to updated selected day
		this.dService.daySelected.subscribe((day: Day) => {
	  		this.selectedDay = day;
	  	});

		//subscribe to updated display activities changed
		this.aService.displayedActivitiesChanged.subscribe((dActivity: Activity[]) =>{
			this.displayActivities = dActivity;
		});

		//subscribed to updated days 
		this.dService.dayAdded.subscribe((days: Day[]) => {
			this.days = days;
		})
	}

	//On Init
	ngOnInit() {
		this.activities = this.aService.getActivities();
		this.days = this.dService.getDays();
		this.selectedDay = this.days[0];
		console.log(this.selectedDay)
	}

	getTimeDiff(endDate) { //calculates how many days away the trip is
		const date1 = new Date();
		const date2 = new Date(endDate);
		const timeDiff = Math.abs(date2.getTime() - date1.getTime());
		const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
		return diffDays
	};

	getDate(i) { //gets the date based on start date - may be able to remove
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

	formatDate(date) { //formats date
		let selectedDate = new Date(date);
		const monthNames = [
		"Jan", "Feb", "Mar",
		"Apr", "May", "Jun", "Jul",
		"Aug", "Sep", "Oct",
		"Nov", "Dec"
		];
		const dayOfWeek = [ "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"
		]
		const day = selectedDate.getDate() + 1;
		const monthIndex = selectedDate.getMonth();
		const weekIndex = selectedDate.getDay() + 1;
		return dayOfWeek[weekIndex] + ', ' + monthNames[monthIndex] + ' ' + day;
	};

	onAddDay() {
		this.dService.addDay();
	}

	modalToggle(a) { //toggles modal
		this.modalOpen = a;
	};

	appModalSave(a) {
		this.tripName = a.name;
		this.startDate = this.formatDate(a.date);
		this.startDateChange();
	};

	startDateChange() {
		this.days.forEach((day, index) => {
			day.date = this.getDate(index);
		});
		console.log(this.days)
	};
};
