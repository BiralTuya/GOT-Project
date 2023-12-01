import { Component, OnInit } from '@angular/core';
import { GotService } from '../../services/got.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: any;
  constructor(
    private gotService: GotService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params);
    this.gotService.getQuotes().subscribe((data: any) => {
      console.log(data);
      this.quotes = data;
    });
  }
 getQuotes() {
    this.gotService.getQuotes().subscribe((data: any) => {
      console.log(data);
      this.quotes = data;
    });
  }

}
