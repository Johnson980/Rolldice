import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
   fname="Troy Johnson"
   fid="991-530-754"
   school="Sheridan college"
   date="July 14, 2020"
  constructor() { }

  ngOnInit(): void {
  }

}
