import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../app/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage implements OnInit{
  categories$: Array<any>;
  showOffers$: Boolean = false;
  locationOffers$: Array<any>;
  offersList$:Array<any>; 
  offers$:Array<any>

  constructor(public navCtrl: NavController, 
              private data: DataService) {

  }

  ngOnInit() {
    var categoryArr = [];
    var offerArr = [];
    this.data.getCategories().subscribe(
      data => {
        //this.categories$ = data; 
        this.locationOffers$ = <any>data[5].details;
        this.locationOffers$.forEach(function(location) {
         
          if(location.lat == 12.7882939 && location.long == 77.6511074){
            offerArr = location.offerDetails;
            location.offerDetails.forEach(function(offer) {
              categoryArr.indexOf(offer.categoryName)
              if(categoryArr.indexOf(offer.categoryName) === -1){
                categoryArr.push(offer.categoryName)
              }
              });
          }

      });
        if(categoryArr.length){
          this.categories$ = categoryArr;
          this.offersList$ = offerArr;
        }
      }
    );
  }

  getOffers(event,categoryName){
    console.log(event, categoryName)
    this.showOffers$ = true;
    if(this.offersList$ && this.offersList$.length) {
      this.offers$ = this.offersList$.filter(category => category.categoryName === categoryName)
    }
    
      
    
  }

  showCategories(event){
    this.showOffers$ = false;
  }
}
