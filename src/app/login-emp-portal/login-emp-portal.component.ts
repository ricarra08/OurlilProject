import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-emp-portal',
  templateUrl: './login-emp-portal.component.html',
  styleUrls: ['./login-emp-portal.component.css']
})
export class LoginEmpPortalComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;

    
  }
}
