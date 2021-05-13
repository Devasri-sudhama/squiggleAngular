import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTheVenuesComponent } from './all-the-venues/all-the-venues.component';
import { Next4matchesComponent } from './next4matches/next4matches.component';
import { PredictionComponent } from './prediction/prediction.component';
import { ResultsofallgamesComponent } from './resultsofallgames/resultsofallgames.component';
import { RivalsComponent } from './rivals/rivals.component';

const routes: Routes = [
  // { path: '/', component:AppComponent },
  // { path: '/', component: AppComponent },
 
  { path: 'prediction', component: PredictionComponent },
  { path: 'Resultsofallgames', component: ResultsofallgamesComponent },
  { path: 'Next4matches', component: Next4matchesComponent },
  { path: 'rivals', component: RivalsComponent },
  { path: 'AllTheVenues', component: AllTheVenuesComponent },
  // { path: '/', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
