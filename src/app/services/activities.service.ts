import { EventEmitter } from '@angular/core';
import { Activity } from '../shared/activity.model';

export class ActivitiesService {
	activitiesChanged = new EventEmitter<Activity[]>();
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

	getActivities() {
		return this.activities.slice();
	}

	addActivity(activity: Activity) {
		this.activities.push(activity);
		this.activitiesChanged.emit(this.activities.slice());
		console.log(this.activities);
	}


}