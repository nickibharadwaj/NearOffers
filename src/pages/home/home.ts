import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../app/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage implements OnInit{
  categories$: Object;
  showOffers$: Boolean = false;

  constructor(public navCtrl: NavController, 
              private data: DataService) {

  }

  ngOnInit() {
    this.data.getCategories().subscribe(
      data => this.categories$ = data
    );
  }

  getOffers(event){
    this.showOffers$ = true;
  }

  showCategories(event){
    this.showOffers$ = false;
  }
}
