import { Component, OnInit } from '@angular/core';
import { Trms } from '../trf/trms'


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
                
model = new Trms('', '', '','',null,"",
                '','','','', '', null,'');
               
submitted:boolean = false;
onSubmit() {this.submitted = true;}

newForm(){
  this.model = new Trms('','','','',0,'','','','','','',0,'');
}

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
