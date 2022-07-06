import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() person: any;
  @Output() handleDelete: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delete(id: string) {
    this.handleDelete.emit(id);
  }
}
