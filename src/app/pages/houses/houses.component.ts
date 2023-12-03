import { Component, OnInit } from '@angular/core';
import { GotService } from '../../services/got.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent {
  houses : any;
  searchQuery: string = '';
  filteredHouses: any[] = [];

  constructor(
    private gotService: GotService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params);
    this.gotService.getHouses().subscribe((data: any) => {
      console.log(data);
      this.houses = data;
    });
  }
  getHouses() {
    this.gotService.getHouses().subscribe((data: any) => {
      console.log(data);
      this.houses = data;
    });
  }
  filterHouses() {
    this.filteredHouses = this.houses.filter((house: any) => {
      return house.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }
}
