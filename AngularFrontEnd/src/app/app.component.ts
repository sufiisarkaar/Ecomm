import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from './services/item-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularFrontEnd';
constructor(private itemSer : ItemServiceService){}

ngOnInit(): void {
 this.emitUser();
}
emitUser() {
  let user = localStorage.getItem("user");
  let userVerify = user && JSON.parse(user).data.id
  if(userVerify){
 this.itemSer.ActiveUser.emit(true);
}
}
}
