import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesComponent,
    HeroDetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
