import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  cartList: any;
  quantity: any;
  grandTotal: any;

  constructor(private IS: ItemServiceService, private toaster:ToasterService) { }

  ngOnInit() {
    this.cartData();
  }

  plusQuantity(id: any, qty: any) {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).data.id;
    if (userId) {
      if (qty < 9) {
        qty++;
        this.IS.updateCartQuantityPlus(id, qty).subscribe((res: any) => {
          this.cartData();
          this.toaster.QuantityUpdatedPlus();
        }, (err) => {
        })
      }
    } else {
      if (qty < 9) {
        qty++;
        this.IS.LocalupdateCartQuantityPlus(id, qty).subscribe((res: any) => {
          this.cartData();
          this.toaster.QuantityUpdatedPlus();
        }, (err) => {
        })

      }
    }
  }


  minusQuantity(item:any, id: any, qty: any) {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).data.id;
    if (userId) {
      if (qty > 0) {
        qty--;
        this.IS.updateCartQuantityMinus(id, qty).subscribe((res: any) => {
          this.cartData();
          if(qty > 0){
            this.toaster.QuantityUpdatedMinus();
          }

          if (qty == 0) {
            this.toaster.RemoveCart(item.item_name);
            localStorage.removeItem("MyItems");
          }
        }, (err) => {
        })
      }
    } else {
      if (qty > 0) {
        qty--;
        this.IS.LocalupdateCartQuantityMinus(id, qty).subscribe((res: any) => {
          this.cartData();   
          if(qty > 0){
            this.toaster.QuantityUpdatedMinus();
          }
          if (qty == 0) {
            this.toaster.RemoveCart(item.item_name);
            // Retrieve the data from local storage
let data = JSON.parse(localStorage.getItem('MyItems') || "[]") as string[];

// Filter out the data to remove based on the ID
data = data.filter((item:any) => item.id !== id);

// Store the updated array back to local storage
localStorage.setItem('MyItems', JSON.stringify(data));
          }
        }, (err) => {
        })
      }
    }
  }

  cartCount: any;

  cartData() {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).data.id;
    if (userId) {
      this.IS.getCartDataByUserID(userId).subscribe((res: any) => {
        this.cartList = res.data;
        this.cartCount = res.data.length;
        this.grandTotal = res.grandTotal;
      });
    } else {
      this.IS.getLocalData().subscribe((res: any) => {
        this.cartList = res.data;
        this.grandTotal = res.grandTotal;
      })
    }
  }

}
