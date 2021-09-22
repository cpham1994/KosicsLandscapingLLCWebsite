import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  phone!: number;
  message!: string;

  constructor() { }

  ngOnInit(): void {
  }
  submitForm(){
    //Alert User
    const message = `Form Submitted!\n${this.name}\n ${this.email}\n ${this.phone} \n ${this.message}`
    alert(message);

    //Do stuff with form

  }
}
