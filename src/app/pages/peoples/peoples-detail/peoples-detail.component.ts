import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GotService } from '../../../services/got.service';

@Component({
  selector: 'app-peoples-detail',
  templateUrl: './peoples-detail.component.html',
  styleUrls: ['./peoples-detail.component.css']
})
export class PeoplesDetailComponent {
  slug: string
  character: any

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
    });
  }

}
