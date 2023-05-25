import { Component, HostListener, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemServiceService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
 ActiveUser:any;
  cartCount: number = 0;
  bgColor = 'transparent'; // Initial background color
  constructor(private itemSer: ItemServiceService, private route:Router) { }

  ngOnInit() {
    this.cartItemsCount();
    this.checkUser();
    this.emitUser();
   
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.pageYOffset > 50) {
      this.bgColor = '#ffff'; // Change background color after scrolling 50px
    } else {
      this.bgColor = 'transparent'; // Change background color back to transparent
    }
  }


  cartItemsCount() {
    let cartData = localStorage.getItem("MyItems");
    if (cartData) {
      this.cartCount = JSON.parse(cartData).length;
    }
    this.itemSer.cardData.subscribe((item) => {
      this.cartCount = item.length;
    })
  }


  checkUser() {
  
   this.itemSer.ActiveUser.subscribe((res)=>{
     this.ActiveUser = res;
    })
  
  }


  emitUser() {
    let user = localStorage.getItem("user");
    let userVerify = user && JSON.parse(user).data.id
    if(userVerify){
   this.itemSer.ActiveUser.emit(true);
  }
  }


  logOut(){
    localStorage.removeItem("user");
    this.route.navigate(['/login'])
  }


}
