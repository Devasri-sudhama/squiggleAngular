import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-all-the-venues',
  templateUrl: './all-the-venues.component.html',
  styleUrls: ['./all-the-venues.component.css']
})
export class AllTheVenuesComponent implements OnInit {


  constructor(private app: AppComponent, private http: HttpClient) { }
  favTeam: string = this.app.favTeam;
  dataSource = [];  
  ngOnInit(): void {
    console.log(this.favTeam)
    const url = "https://api.squiggle.com.au/?q=games;year=2021;"
    this.http.get(url).subscribe((res: any) => {
      // this.gameDetails = res
      res.games.forEach(element => {
        // console.log(element)
        if ((element.hteam == this.favTeam && (element.winner == this.favTeam)) || ((element.ateam == this.favTeam) && (element.winner == this.favTeam))) {
          //  console.log(element)
          this.dataSource.push(element)
        }

      });
    });
console.log(this.dataSource)
  }

}
