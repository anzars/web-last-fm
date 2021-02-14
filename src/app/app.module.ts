import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PageComponent } from '../Components/page/page.component';
import { MaterialModule } from './material.module';
import { ArtistlistComponent } from '../Components/artistlist/artistlist.component';
import { ArtisttableComponent } from '../Components/artisttable/artisttable.component';
import { ArtistsearchComponent } from 'src/Components/artistsearch/artistsearch.component';
import { ToptracksComponent } from '../Components/toptracks/toptracks.component';
import { CardsComponent } from '../Components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ArtistlistComponent,
    ArtisttableComponent,
    ArtistsearchComponent,
    ToptracksComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
