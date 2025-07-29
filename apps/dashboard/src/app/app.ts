import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { NxWelcome } from './nx-welcome';
import {CommonModule} from "@angular/common";
import {User} from "@ng-mf/data-access-user";
import {async, distinctUntilChanged} from "rxjs";

@Component({
  imports: [NxWelcome, RouterModule, CommonModule],
  selector: 'ng-mf-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private router = inject(Router);
  private userService = inject(User);
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  ngOnInit() {
    this.isLoggedIn$.pipe(
      distinctUntilChanged()
    ).subscribe(async (loggedIn) => {
      setTimeout(() => {
        if (!loggedIn) {
          this.router.navigateByUrl('login');
        } else {
          this.router.navigateByUrl('');
        }
      });
    });
  }
}
