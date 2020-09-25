import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-trf',
  templateUrl: './trf.component.html',
  styleUrls: ['./trf.component.css']
})
export class TrfComponent implements OnInit {
  eventTypes = ['University Course','Seminar', 'Certification Prep Classes',
                'Certification','Technical-Training','other'];

  states = ['Alabama','Alaska', 'Arizona','Alabama','Arkansas', 'California',
                'Colorado','Connecticut','Delaware','District of Columbia','Florida',
                'Georgia','Guam','Hawaii', 'Idaho','Illinois','Indiana', 'Iowa','Kansas',
                'Kentucky', 'Maine','Maryland','Massachusetts', 'Michigan','Minnesota',
                'Mississippi','Missouri', 'Montana','Nebraska','Nevada', 'New York',
                'North Carolina','North Dakota', 'Northern Marianas Islands','Ohio','Oklahoma', 'Oregon',
                'Pennsylvania','Puerto Rico', 'Rhode Island','South Carolina','South Dakota', 'Tennessee',
                'Texas','Utah', 'Vermont','Virginia','Virgin Islands', 'Washington',
                'West Virginia','Wisconsin','Wyoming'];
                

  
  form: FormGroup;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      formFirstName: ['', Validators.required],
      formLastName: ['', Validators.required],
      formEventType: ['', Validators.required],
      formEventCost: ['', Validators.required],
      formEventStartDate: ['', Validators.required],
      formEventStartTime: ['', Validators.required],
      formEventEndTime: ['', Validators.required],
      formEventAddress: ['', Validators.required],
      formEventCity: ['', Validators.required],
      formEventState: ['', Validators.required],
      formEventZip: ['', Validators.required],
      formDescription: ['', Validators.required],
  });
  }

  get f() {return this.form.controls;}

  onSubmit(){
    this.submitted = true;
    console.log("inside submit");
    
    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe({
          next: () => {
              this.router.navigate(['../emphome'], { relativeTo: this.route })
              console.log("inside submit");
          }
      })
  }
  
}
