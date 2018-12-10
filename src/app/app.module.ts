import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { VillesComponent } from './pages/villes/villes.component';
import { HttpClientModule } from '@angular/common/http';
import { RelevesComponent } from './pages/releves/releves.component';
const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'villes', component: VillesComponent},
  { path: 'releves', component: RelevesComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    VillesComponent,
    RelevesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash : true} )
  ],
  providers: [

   // {provide:, useClass:}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

