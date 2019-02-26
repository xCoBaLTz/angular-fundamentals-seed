import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { Passenger } from "../../models/passenger.interface";
import { timingSafeEqual } from "crypto";


@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
      <div>
        <passenger-count [items]="passengers"></passenger-count>
        <div *ngFor="let passenger of passengers;">{{ passenger.fullname }}</div>
        <passenger-detail *ngFor="let passenger of passengers;" [detail]="passenger" (remove)="handleRemove($event)" (edit)="handleEdit($event)"></passenger-detail>
      </div>
    `
})
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService){}

  ngOnInit(){
    this.passengerService.getPassengers().then((data: Passenger[]) => this.passengers = data);
  }

  handleRemove(event: Passenger){
    this.passengerService.removePassenger(event).then((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => {
        return passenger.id !== event.id;
      });
    });
  }

  handleEdit(event: Passenger){
    this.passengerService.updatePassenger(event).then((data: Passenger) => {
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if(passenger.id === event.id){
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
    });
  }
}