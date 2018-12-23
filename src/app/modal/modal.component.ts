import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	@Output() onModalClose = new EventEmitter<boolean>(); 
	@Output() onModalSave = new EventEmitter<{}>(); 
	@Input() name: string;
	@Input() startDate: Date;



	modalClose() {
		this.onModalClose.emit(false);
	}

	modalSave(nameInput: HTMLInputElement, timeInput: HTMLInputElement, dateInput: HTMLInputElement) {
		let userInput = { 
			time: timeInput.value,
			name: nameInput.value,
			date: dateInput.value
		} 
		this.onModalSave.emit(userInput);
		this.modalClose();
	}

	constructor() { }

	ngOnInit() {
	}

}

