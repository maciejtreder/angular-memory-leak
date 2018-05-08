import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LuckyComponent } from './lucky/lucky.component';
import { LuckyService } from './lucky/lucky.service';
import { ReallyComponent } from './really/really.component';
import { RouterModule } from '@angular/router';

@NgModule({
 declarations: [
   AppComponent,
   LuckyComponent,
   ReallyComponent
 ],
 imports: [
   BrowserModule,
   RouterModule.forRoot([
     { path: '', redirectTo: 'lucky', pathMatch: 'full'},
     { path: 'lucky', component: LuckyComponent, pathMatch: 'full'},
     { path: 'really', component: ReallyComponent, pathMatch: 'full'},
   ])
 ],
 providers: [
   LuckyService
 ],
 bootstrap: [AppComponent]
})
export class AppModule { }
