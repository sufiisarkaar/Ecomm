import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
price:any = 15;
totalPrice:any =15;
quantity:number = 1;

ngOnInit() {
 
 
 
}

plusQuantity(){
  if(this.quantity < 9){
  this.quantity++;
  this.totalPrice = this.price*this.quantity
  console.log(this.totalPrice);
  }
}

minusQuantity(){
  if(this.quantity > 1){
  this.quantity--;
  this.totalPrice = this.price*this.quantity
  console.log(this.totalPrice);
  }
}

}
