import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login-master',
  templateUrl: './login-master.component.html',
  styleUrls: ['./login-master.component.css']
})
export class LoginMasterComponent implements OnInit {
  user: User;

  constructor(private accountService: AccountService) { 
    this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
  }

}
