import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() toggleStatusEvent = new EventEmitter<boolean>();
  toggleStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateToggle(){
    this.toggleStatus = !this.toggleStatus;
    this.toggleStatusEvent.emit(this.toggleStatus);
  }

}
