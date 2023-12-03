import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GotService } from '../../../services/got.service';

@Component({
  selector: 'app-peoples-detail',
  templateUrl: './peoples-detail.component.html',
  styleUrls: ['./peoples-detail.component.css']
})
export class PeoplesDetailComponent {
  slug: string;
  character: any;
  newQuote: string = '';
  num: number = 0;

  constructor(
    private gotService: GotService,
    private activatedRoute: ActivatedRoute
  ) {
    this.slug = this.activatedRoute.snapshot.params['slug'];
    console.log(this.slug)
  }

  ngOnInit() {
    this.gotService.getPeoplebyName(this.slug).subscribe((data: any) => {
      console.log(data);
      this.character = data[0];
      this.newQuote = data[0].quotes[this.num];
    });
  }

  getNewQuote() {
    this.num = Math.floor(Math.random() * this.character.quotes.length);
    this.newQuote = this.character.quotes[this.num];
  }
}
