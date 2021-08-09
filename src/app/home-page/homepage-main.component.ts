import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-main',
  template: `
    <router-outlet> </router-outlet>
  `,
  styles: [``]
})
export class HomepageMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
