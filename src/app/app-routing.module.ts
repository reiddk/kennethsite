import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookViewComponent } from './book-view/book-view.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'book/:book/:page', component: BookViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
