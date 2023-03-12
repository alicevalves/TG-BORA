import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit{
constructor(private router: Router){}

ngOnInit(): void {
  console.log("teste")
  setTimeout(() => {
    this.router.navigate(['/initial'])
  }, 2000);
}

}
