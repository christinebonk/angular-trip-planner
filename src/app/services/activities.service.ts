import { EventEmitter } from '@angular/core';
import { Activity } from '../shared/activity.model';
import { Day } from '../shared/day.model';

export class ActivitiesService {
	activitiesChanged = new EventEmitter<Activity[]>();
	displayedActivitiesChanged = new EventEmitter<Activity[]>();
	private activities: Activity[] = [
		new Activity('Bellavista', 2, 'Feb 9 2019'),
		new Activity('Lunch', 3, 'Feb 9 2019'),
		new Activity('Lunch', 4, 'Feb 10 2019'),
		new Activity('Flying', 6, 'Feb 10 2019'),
		new Activity('Museum', 1, 'Feb 8 2019'),
		new Activity('Walk in Park', 23, 'Feb 10 2019'),
		new Activity('Beach Time', 11, 'Feb 9 2019'),
		new Activity('Flower picking', 7, 'Feb 8 2019'),
		new Activity('Wine Tour', 10, 'Feb 9 2019'),
		new Activity('Gardening', 8, 'Feb 8 2019')
	];
	private displayedActivities: Activity[];

	//returns all activities
	getActivities() {
		return this.activities.slice();
	}

	//adds activities
	addActivity(activity: Activity, day: Day) {
		activity.activityDate = day.date;
		this.activities.push(activity);
		this.activitiesChanged.emit(this.activities.slice());
		this.displayActivities(day);
	}

	//returns activities for selected date
	displayActivities(day) {
		this.displayedActivities = this.activities.filter(activity => activity.activityDate === day.date);
		this.displayedActivities = this.displayedActivities.sort((a,b) => parseFloat(a.activityTime) - parseFloat(b.activityTime));
		this.displayedActivitiesChanged.emit(this.displayedActivities.slice());
	}

}

