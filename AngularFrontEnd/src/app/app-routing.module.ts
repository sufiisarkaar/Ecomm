import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: "", component:ContentComponent},
  {path: "cart", component:AddToCartComponent},
  {path: "about", component:AboutComponent},
  {path: "login", component:LoginComponent},
  {path: "signup", component:RegisterComponent},
  {path: "profile", component:ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
