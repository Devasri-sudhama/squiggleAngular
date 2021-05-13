import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-next4matches',
  templateUrl: './next4matches.component.html',
  styleUrls: ['./next4matches.component.css']
})
export class Next4matchesComponent implements OnInit {

  constructor(private app: AppComponent, private http: HttpClient) { }
  favTeam: string = this.app.favTeam;
  teamData: [] = this.app.data.teams;
  
  currentDate = new Date().toJSON("yyyy/MM/dd HH:mm");
  dataSource = [];

  panelOpenState = false;
  count=0;
  ngOnInit(): void {
    console.log(this.favTeam)
    console.log(this.teamData)

    const url = "https://api.squiggle.com.au/?q=games;year=2021;"
    this.http.get(url).subscribe((res: any) => {
      // this.gameDetails = res
      console.log(this.currentDate)
      res.games.forEach(element => {
        // console.log(element)
        if ((element.hteam == this.favTeam || element.winner == this.favTeam)) {
          //  console.log(element)
          if((element.date.split(" ")[0]>this.currentDate) && this.count<4){

            console.log(element.date.split(" ")[0])
            this.count++;
            this.dataSource.push(element)
          }
          
        }

      });
      console.log(this.dataSource)
    });
    // console.log(this.dataSource)
  }

}
