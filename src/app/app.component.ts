import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
// or

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'squiggle';


  data: any = []
  gameDetails: any = []
  teamDetails: any = []
  favTeam: string = 'Adelaide';
  currUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.getData();
    this.getGameId(this.favTeam)
    const url = 'https://api.squiggle.com.au/?q=teams';
    // this.getGameId(this.favTeam)
    this.http.get(url).subscribe((res: any) => {
      // this.gameDetails = res
      this.teamDetails.push(res)


    });

  }

  name = '';
  flag = 0;
  predictData = []
  teamId: string = '1';
  selected(event) {
    console.log('selected ', event.option.value);

  }

  onChange(): void {
    this.router.navigateByUrl('/');
    // this.favTeam = UpdatedValue;
  }

  getData() {
    const url = 'https://api.squiggle.com.au/?q=teams'

    this.http.get(url).subscribe((res) => {
      this.data = res
      console.log(this.data)
    })

  }
  teamid = '';
  
  getGameId(teamName) {
    console.log(teamName)
    let name = teamName;
    // alert("hello" + name);

    const url = 'https://api.squiggle.com.au/?q=games;year=2021;round=20'
    this.http.get(url).subscribe((res: any) => {
      // this.gameDetails = res
      res.games.forEach(element => {
        if (element.hteam === name) {
          console.log(element.id)
          this.teamid = element.id;
          // alert(this.teamid)
          const url = 'https://api.squiggle.com.au/?q=tips;year=2021;round=20;game=' + this.teamid;
          this.http.get(url).subscribe((res: any) => {
            console.log(res)
            // preData = this.res
            this.predictData.push(res.tips)
          })
          // return teamid;
          this.flag = 1;
          // console.log(this.predictData)

        }
      });
    });


    this.currUrl = this.router.url;

    this.router.navigateByUrl('/');
    //   console.log(this.gameDetails.length)
    //   for(var i=0;i<this.gameDetails.length;i++){
    //     console.log(this.gameDetails[i]);
    //   }
    //   // if(this.gameDetails[])
    //   console.log(this.gameDetails)
    // })6405
  }



}
