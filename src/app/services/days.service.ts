import { Day } from '../shared/day.model';

export class DaysService {
	private days: Day[] = [
		new Day('Toronto', 'New York', 'Feb 8 2019'),
		new Day('New York', '', 'Feb 9 2019'),
		new Day('New York', 'Chicago', 'Feb 10 2019')
	];

	getDays() {
		return this.days.slice();
	}
	
}