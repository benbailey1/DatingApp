import { AccountService } from './../../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  redirectHome() {
    this.accountService.redirectHome();
  }
}
