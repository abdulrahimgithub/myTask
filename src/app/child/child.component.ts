import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() firstName: string;
@Input() lastName: string;
@Input() dob: string

  ngOnInit() {
    
   
  }

}
