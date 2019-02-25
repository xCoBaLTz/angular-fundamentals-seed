import { Injectable } from "@angular/core";
import { Passenger } from "./models/passenger.interface";
import { Http } from "@angular/http";

export class PassengerDashboardService{
    constructor(private http: Http){
    }

    getPassengers(): Passenger[]{
        return [{
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
}