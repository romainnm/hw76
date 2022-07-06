import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
  addPersonForm;
  @Output() handleAddPerson: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.addPersonForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
    });
  }

  ngOnInit(): void {}

  add() {
    this.handleAddPerson.emit(this.addPersonForm.value);
    this.addPersonForm.reset();
  }
}
