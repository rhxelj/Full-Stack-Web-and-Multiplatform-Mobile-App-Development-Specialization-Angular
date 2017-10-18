import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdToolbarModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {MdDialogModule} from '@angular/material';
import {MdFormFieldModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MdSlideToggleModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';

import { MatFormFieldControl } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';

import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    MdDialogModule,
    MdFormFieldModule,
    ReactiveFormsModule,
    MdSlideToggleModule,
    MdSelectModule,
    MatProgressSpinnerModule
    ],
  entryComponents: [
    LoginComponent
  ],
  providers: [DishService,PromotionService,LeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
