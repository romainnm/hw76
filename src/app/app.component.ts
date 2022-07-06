import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hw76';
  people: Person[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('./assets/personData.json')
      .subscribe((resData: any) => (this.people = resData));
  }

  deletePerson(id: string) {
    const newPeople = [...this.people].filter((person) => person.id !== id);
    this.people = newPeople;
  }

  addPerson(person: Person) {
    const newPerson = new Person(person.id, person.firstName, person.lastName);
    this.people = [...this.people, newPerson];
  }
}

export class Person {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
