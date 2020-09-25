import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login-ds',
  templateUrl: './login-ds.component.html',
  styleUrls: ['./login-ds.component.css']
})
export class LoginDsComponent implements OnInit {
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
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dshome';
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

