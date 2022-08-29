import { DataVehicle } from './../models/dataVehicles';
import { Observable } from 'rxjs';
import { Vehicle, VehiclesApi } from '../models/vehicle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private url = 'http://localhost:3000/vehicle';
  private vehicleDataUrl = 'http://localhost:3000/vehicleData?valor=';

  data!: DataVehicle;

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<VehiclesApi> {
    return this.http.get<VehiclesApi>(this.url);
  }

  select(id: string | number): Observable<Vehicle> {
    return this.http.get(`${this.url}/${id}`);
  }

  sendVin(vin: string | null) {
    return this.http.get(`${this.vehicleDataUrl}${vin}`);
  }
}
