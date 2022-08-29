import { DataVehicles, DataVehicle } from './../models/dataVehicles';
import { Vehicle, Vehicles } from './../models/vehicle';
import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import {
  map,
  pluck,
  Observable,
  switchMap,
  tap,
  distinctUntilChanged,
  filter,
  debounceTime,
} from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  vehicles$ = this.service.getVehicles().pipe(pluck('vehicles'));
  carsData!: DataVehicles;
  vin = new FormControl();
  data!: DataVehicle;

  idVehicle!: string | number;
  volTotal?: number | string;
  connected?: number | string;
  softwareUp?: number | string;
  vehicleName?: string;
  img?: string;

  constructor(private service: DashboardService) {}

  ngOnInit(): void { }

  selectVehicle() {
    this.service.select(this.idVehicle).subscribe((dataVehicle) => {
      this.volTotal = dataVehicle.volumetotal;
      this.connected = dataVehicle.connected;
      this.softwareUp = dataVehicle.softwareUpdates;
      this.vehicleName = dataVehicle.vehicle;
      const img = `./assets/img/${dataVehicle.vehicle}.png`;
      this.img = img;
    });
  }

}
