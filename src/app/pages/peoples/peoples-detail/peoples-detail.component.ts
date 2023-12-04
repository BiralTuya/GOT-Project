import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.slug = this.activatedRoute.snapshot.params['slug'];
  }

  ngOnInit() {
    this.gotService.getPeoplebyName(this.slug).subscribe((data: any) => {
      if(data.length === 0) {
        this.router.navigate(['/peoples']);
        return;
      }
      this.character = data[0];
      this.newQuote = data[0].quotes[this.num];
    });
  }

  getNewQuote() {
    this.num = Math.floor(Math.random() * this.character.quotes.length);
    this.newQuote = this.character.quotes[this.num];
  }
}
