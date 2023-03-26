import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}




  goToRegisterEvent(){
    this.router.navigate(['/event'])
  }
}
