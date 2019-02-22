import { Component } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
      <div>
        <h3>Airline Passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            <span class="status" [class.checked-in]="passenger.checkedIn"></span>
            {{ i }}: {{passenger.fullname}}
            <div class="date">Check in date: {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd') : 'Not checked in' }}</div>
            <div class="children">Children: {{ passenger.children?.length || 0 }}</div>
          </li>
        </ul>
      </div>
    `
})
export class PassengerDashboardComponent{
  passengers: Passenger[] = [{
    id: 1,
    fullname:'Stephen',
    checkedIn: true,
    checkedInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkedInDate: null,
    children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7}]
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkedInDate: 1491606000000,
    children: null
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkedInDate: 1488412800000,
    children: [{name: 'Jessica', age: 1}]
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkedInDate: null,
    children: null
  }];
}