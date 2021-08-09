import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Output() toggleStatusEvent = new EventEmitter<boolean>();
  toggleStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateToggle(){
    this.toggleStatus = false;
    this.toggleStatusEvent.emit(this.toggleStatus);
  }

}
