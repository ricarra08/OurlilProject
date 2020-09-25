import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '../_services/account.service';
@Component({
  selector: 'app-dshome',
  templateUrl: './dshome.component.html',
  styleUrls: ['./dshome.component.css']
})
export class DshomeComponent implements OnInit {
  trms= null;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAll()
            .pipe(first())
            .subscribe(trms => this.trms = trms);
  }

  logout() {
    this.accountService.logout();
}

}
