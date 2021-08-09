import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  toggleValue: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getToggleStatus(status){
    this.toggleValue = status;
    console.log(status);
  }

}
