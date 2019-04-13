import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent,
  },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],// every route is passed here whichever is used
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
