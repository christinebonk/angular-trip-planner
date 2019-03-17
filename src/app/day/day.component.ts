import { Component, OnInit, Input } from '@angular/core';
import { DaysService } from '../services/days.service'; 
import { Day } from '../shared/day.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})

export class DayComponent implements OnInit {
  @Input() day;
  
  constructor(private dService: DaysService) { }

	viewDay() {
		this.dService.selectDay(this.day);
	}

  ngOnInit() {
  }

}
