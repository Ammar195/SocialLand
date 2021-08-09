import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class LoginStatusService {
 
    userLoginStatus = new EventEmitter<boolean>();
    updateActivatedForm = new Subject<string>();

    constructor(
        private router: Router
        ) {
    }

}