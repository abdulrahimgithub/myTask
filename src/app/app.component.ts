import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  title = 'TaskParentChild';
  firstName: string;
lastName: string;
dob: string;
ngOnInit() {
  this.myForm = this.fb.group({
    firstName: '',
    lastName: '',
    dob: ''
  });
}
onSubmit(form: FormGroup) {
 /// console.log('Valid?', form.valid); // true or false
 this.firstName=form.value.firstName;
 this.lastName=form.value.lastName;
 this.dob=form.value.dob;

  // console.log('Name', form.value.firstName);
  // console.log('Email', form.value.lastName);
  // console.log('Message', form.value.dob);
}

}
