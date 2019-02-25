import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service"
import { Passenger } from "../../models/passenger.interface";


@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
      <div>
        <passenger-count [items]="passengers"></passenger-count>
        <div *ngFor="let passenger of passengers;"> {{ passenger.fullname }} </div>
        <passenger-detail *ngFor="let passenger of passengers;" [detail]="passenger" (remove)="handleRemove($event)" (edit)="handleEdit($event)"></passenger-detail>
      </div>
    `
})
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService){}

  ngOnInit(){
    this.passengers = this.passengerService.getPassengers();
  }

  handleRemove(event: Passenger){
    this.passengers = this.passengers.filter((passenger: Passenger)=>{
      return passenger.id !== event.id;
    });  
  }

  handleEdit(event: Passenger){
    this.passengers = this.passengers.map((passenger: Passenger)=>{
      if(passenger.id === event.id){
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
}