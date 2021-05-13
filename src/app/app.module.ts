import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RivalsComponent } from './rivals/rivals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ResultsofallgamesComponent } from './resultsofallgames/resultsofallgames.component';
import { PredictionComponent } from './prediction/prediction.component';
import { Next4matchesComponent } from './next4matches/next4matches.component';
import { AllTheVenuesComponent } from './all-the-venues/all-the-venues.component';
import { ProgressBarModule } from 'angular-progress-bar';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    RivalsComponent,
    ResultsofallgamesComponent,
    PredictionComponent,
    Next4matchesComponent,
    AllTheVenuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     BrowserAnimationsModule,
    ProgressBarModule,
    MatSelectModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      subtitle: "Probability"
    }) 
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
