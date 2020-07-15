import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
msg:string;
  constructor() { }
  ngOnInit(): void {
  }

  roll_button(){
   this.msg='Button was clicked';
   return this.msg;
  

}


}
