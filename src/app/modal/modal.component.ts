import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	@Output() onModalClose = new EventEmitter<boolean>(); 
	
	modalClose() {
		this.onModalClose.emit(false);
	}

	constructor() { }

	ngOnInit() {
	}

}

