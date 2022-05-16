import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public header = 'Contacts';
  public description = 'Manage your contact list';
  public numContacts = 10;
  public counterClass = 'tag secondary';
  public formHidden = true;
  public workStatuses = [
    { id:0, description: 'unknow'},
    { id:1, description: 'student'},
    { id:2, description: 'unemployed'},
    { id:3, description: 'employed'},
  ]
  public contact = {
    name: '',
    isVIP: false,
    gender: '',
    workStatus: 0,
    company: '',
    education:''
  };

  public contacts: Contact[] = [];

  public saveContact() {
    this.contacts.push({...this.contact});
    this.numContacts = this.contacts.length;
  }

  public deleteContact(contact: Contact){
    this.contacts = this.contacts.filter(c => c.name !== contact.name );
    this.numContacts = this.contacts.length;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
