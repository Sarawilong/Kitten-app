import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { CreateKittenComponent} from './components/create-kitten/create-kitten.component';
import { ListKittenComponent} from './components/list-kitten/list-kitten.component';
import { UserKittenComponent } from './components/user-kitten/user-kitten.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'create',
    component : CreateKittenComponent
  },
  {
    path:'list',
    component: ListKittenComponent
  },
  {
    path:'user',
    component: UserKittenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

