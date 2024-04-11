import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentDate: number;

  constructor(){
    this.currentDate=new Date().getFullYear();
    console.log(this.currentDate);
  }

}
