import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  // percent:80
  ngOnInit(): void {
  }
  constructor(private app: AppComponent, private http: HttpClient) {
    this.getGameId(this.favTeam)
    this.getconf()

  }

  predata = this.app.predictData
  favTeam: string = this.app.favTeam;
  data: any = []
  gameDetails: any = []
  teamDetails: any = this.app.teamDetails;
  percentValue: number;
  confidenceDetails: any =[]
  conf: number = 0;
  count: number = 0;
  teamid: string
  predictData = [];
  flag: number = 0;
  currUrl: any;
  router: any;



  getGameId(teamName) {
    // alert("teams getGAmeId " + teamName)
    console.log(teamName)
    console.log(teamName)
    // let name = teamName;
    // alert("hello" + name);
    // team_id:Number
    const url = 'https://api.squiggle.com.au/?q=games;year=2021;round=20'
    this.http.get(url).subscribe((res: any) => {
      // this.gameDetails = res
      res.games.forEach(element => {
        if (((element.hteam == this.favTeam) && this.flag == 0) || (((element.ateam == this.favTeam) && this.flag == 0))) {
          console.log(element.id)
          this.teamid = element.id;
          // alert(this.teamid)


          let url1 = 'https://api.squiggle.com.au/?q=tips;year=2021;round=20;game=' + this.teamid;
          // alert("url1" + url1)
          this.http.get(url1).subscribe((res1) => {
            console.log(res1)
            // this.data = res
            // preData = res
            this.predictData.push(res1)

            console.log(this.predictData[0].tips)
            this.confidenceDetails = this.predictData[0].tips
            this.confidenceDetails.forEach(ele => {
              // this.teamDetails
              this.count++;
              this.conf = (this.conf) + parseFloat(ele.hconfidence)
              console.log(this.conf)
            })
            this.percentValue = Math.round(this.conf / this.count)
            // console.log(this.percentValue)
            
            this.flag = 1;
            return true
          })
          // return teamid;
          // if(this.)
          if (this.flag = 1) {
            return false
          }
          console.log(this.confidenceDetails)

        }
      });
    });


    // this.currUrl = this.router.url;

    // this.router.navigateByUrl('/');
    //   console.log(this.gameDetails.length)
    //   for(var i=0;i<this.gameDetails.length;i++){
    //     console.log(this.gameDetails[i]);
    //   }
    //   // if(this.gameDetails[])
    //   console.log(this.gameDetails)
    // })6405
  }
  getconf() {

  }

}
