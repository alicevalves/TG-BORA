import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  goToFeed(){
    this.router.navigate(['/feed'])
  }

  goToChat(){
    this.router.navigate(['/chat'])
  }
}
