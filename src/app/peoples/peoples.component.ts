import { Component, OnInit } from '@angular/core';
import { GotService } from '../services/got.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent {
  peoples : any;
  constructor(
    private gotService: GotService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params);
    this.gotService.getPeople().subscribe((data: any) => {
      console.log(data);
      this.peoples = data;
    });
  }
  getPeople() {
    this.gotService.getPeople().subscribe((data: any) => {
      console.log(data);
      this.peoples = data;
    });
  }
}
