import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trms } from '../trf/trms'
import { TrfService } from './trf.service';

@Component({
  selector: 'app-trf',
  templateUrl: './trf.component.html',
  styleUrls: ['./trf.component.css']
})
export class TrfComponent {
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
                
model = new Trms('', '', '','',null,"",
'','','','', '', null,'','','');
               



  constructor(private router: Router, 
    private Trfservice: TrfService) { }

  onSubmit(): void{
    console.log('Submitted');
    this.Trfservice.submitForm(this.model).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  
}
