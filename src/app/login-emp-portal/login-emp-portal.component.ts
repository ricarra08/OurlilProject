import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '../_services/account.service';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login-emp-portal',
  templateUrl: './login-emp-portal.component.html',
  styleUrls: ['./login-emp-portal.component.css']
})
export class LoginEmpPortalComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get e() {
    return this.form.controls;
  }
  onSubmit(){
    this.submitted = true;

    if (this.form.invalid){
      console.log('invalid')
      return
    }

    this.accountService.login(this.e.username.value, this.e.password.value)
      .pipe(first())
      .subscribe({
          next: () => {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/emphome';
            console.log(returnUrl);
            this.router.navigateByUrl(returnUrl);
          },
          error: error => {
            //maybe do it for 
            console.log('error');
          }
      })
    
  }
}
