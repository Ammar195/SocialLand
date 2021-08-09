import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-groups',
    template: `
      <app-group-list></app-group-list>
      <app-group-list-mobile></app-group-list-mobile>
      <app-group-detail></app-group-detail>
    `,
    styles: [`
    app-group-list{
        display: inline-block; 
        width: 26%; 
        vertical-align: top;
    }

    app-group-detail{
        display: inline-block;
        width: 74%;
        vertical-align: top;
    }

    app-group-list-mobile{
        display: none;
        width: 100%;
        vertical-align: top;
        margin-top: 60px;
    }

    @media screen and (max-width: 750px){
        app-group-list{
            display: none;
        }

        app-group-list-mobile{
            display: inline-block;
        }

        app-group-detail{
            width: 100%;
        }
    }
    `]
})

export class GroupsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}