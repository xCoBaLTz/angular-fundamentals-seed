import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface"

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template:`
        <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
            <div>
                Passenger name:
                <input type="text" 
                    name="fullname" 
                    [ngModel]="detail?.fullname" 
                    required 
                    #fullname="ngModel"> 
                    
                   <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">Passenger name is required</div>
            </div>

            <div>
                Passenger ID:
                <input type="number" 
                    name="id" 
                    [ngModel]="detail?.id" 
                    required 
                    #id="ngModel"> 
                    
                    <div *ngIf="id.errors?.required && id.dirty" class="error">Passenger id is required</div>
            </div>

            <div>
                <label>
                    <input type="checkbox" [value]="true" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
                </label>
            </div>

            <div *ngIf="form.value.checkedIn">
                Check in date:
                <input type="number" name="checkedInDate" [ngModel]="detail?.checkedInDate">
            </div>

            <div>
                Luggage:
                <select name="baggage" [ngModel]="detail?.baggage">
                    <option *ngFor="let item of baggage" [ngValue]="item.key">
                        {{ item.value }}
                    </option>
                </select>
            </div>

            <button type="submit" [disabled]="form.invalid">
                Update passenger
            </button>

        </form>
    `
})
export class PassengerFormComponent{
    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter();

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    },{
        key: 'hand-only',
        value: 'Hand baggage'
    },{
        key: 'hold-only',
        value: 'Hold baggage'
    },{
        key: 'hand-hold',
        value: 'Hand and hold baggage'
    }];

    toggleCheckIn(checkedIn: boolean){
        if(checkedIn){
            this.detail.checkedInDate = Date.now();
        }
    }

    handleSubmit(passenger: Passenger, isValid: boolean){
        if(isValid){
            this.update.emit(passenger);
        }
    }
    
}