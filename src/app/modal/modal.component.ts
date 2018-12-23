import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	@Output() onModalClose = new EventEmitter<boolean>(); 
	@Output() onModalSave = new EventEmitter<{}>(); 
	
	modalClose() {
		this.onModalClose.emit(false);
	}

	modalSave(nameInput: HTMLInputElement, timeInput: HTMLInputElement) {
		let userInput = { 
			time: timeInput.value,
			name: nameInput.value
		} 
		this.onModalSave.emit(userInput);
	}

	constructor() { }

	ngOnInit() {
	}

}

