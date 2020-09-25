import { Component, OnInit } from '@angular/core';

import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css']
})
export class EMPhomeComponent implements OnInit {
  user: User;
  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
   }

  ngOnInit(): void {
  }

  logout() {
    this.accountService.logout();
}

}
