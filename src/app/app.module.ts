import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './fruits/home/home.component';
import { ViewfruitComponent } from './fruits/viewfruit/viewfruit.component';
import { CreateComponent } from './fruits/create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './fruits/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewfruitComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
