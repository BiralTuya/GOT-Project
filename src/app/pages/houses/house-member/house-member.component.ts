import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GotService } from '../../../services/got.service';

@Component({
  selector: 'app-house-member',
  templateUrl: './house-member.component.html',
  styleUrls: ['./house-member.component.css']
})
export class HouseMemberComponent {
  slug: string
  house: any

  constructor(
    private gotService: GotService,
    private activatedRoute: ActivatedRoute
  ) {
    this.slug = this.activatedRoute.snapshot.params['slug'];
    console.log(this.slug)
  }

  ngOnInit() {
    
    this.gotService.getHousebyName(this.slug).subscribe((data: any) => {
      console.log(data);
      this.house = data[0];
    });
  }

}
