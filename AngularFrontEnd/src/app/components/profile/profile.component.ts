import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  edit: boolean = false;
  bgColor: any = '#f0ad4e';
  editProfile() {

    this.edit = !this.edit;

    if (!this.edit) {
      this.bgColor = '#f0ad4e';
      console.log("Updated");
      // Write Profile Update Code Here


    } else {
      console.log("Not");
      this.bgColor = '#28a745';
    }

  }

}
