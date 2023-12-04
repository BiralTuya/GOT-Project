import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GotService } from '../../../services/got.service';
import { Router } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.slug = this.activatedRoute.snapshot.params['slug'];
  }

  ngOnInit() {
    this.gotService.getHousebyName(this.slug).subscribe((data: any) => {
      if(data.length === 0) {
        this.router.navigate(['/houses']);
        return;
      }
      this.house = data[0];
    });
  }

}
