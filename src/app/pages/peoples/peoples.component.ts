import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GotService } from '../../services/got.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent {
  peoples : any;
  searchName: string = '';
  filteredPeoples: any[] = [];

  constructor(
    private gotService: GotService,
    private activatedRoute: ActivatedRoute
  ) {}

  getPeople() {
    this.gotService.getPeople().subscribe((data: any) => {
      this.peoples = data;
    });
  }

  ngOnInit() {
    this.getPeople();
  }

  filterPeople() {
    this.filteredPeoples = this.peoples.filter((people: any) => {
      return people.name.toLowerCase().includes(this.searchName.toLowerCase());
    });
  }
}
