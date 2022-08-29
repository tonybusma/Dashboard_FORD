import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  filter,
  pluck,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  vin = new FormControl('');
  data!: any;

  constructor(private service: DashboardService) {}

  ngOnInit(): void {}

  carsData$ = this.vin.valueChanges
    .pipe(
      debounceTime(100),
      filter((value) => value!.length > 19 || !value!.length),
      distinctUntilChanged(),
      tap((data) => console.log(data)),
      switchMap((data) => this.service.sendVin(data)),
      pluck('vehicleData'),
      tap((data) => console.log(data))
    )
    .subscribe((obj: any) => {
      this.data = obj[0];
      console.log(obj);
    });
}
