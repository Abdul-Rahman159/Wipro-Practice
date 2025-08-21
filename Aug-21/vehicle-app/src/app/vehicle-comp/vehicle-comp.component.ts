import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-comp.component.html',
  styleUrls: ['./vehicle-comp.component.css']
})
export class VehicleCompComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }
}
