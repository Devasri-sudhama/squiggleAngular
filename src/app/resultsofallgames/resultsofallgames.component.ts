import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-resultsofallgames',
  templateUrl: './resultsofallgames.component.html',
  styleUrls: ['./resultsofallgames.component.css']
})

export class ResultsofallgamesComponent implements OnInit {
  @Input() title: string;
  data: any;

  constructor(private app: AppComponent, private http: HttpClient) {

  }


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [];
  favTeam: string = this.app.favTeam;
  ngOnInit(): void {
    const url = "https://api.squiggle.com.au/?q=games;year=2021;"
    this.http.get(url).subscribe((res: any) => {
      // this.gameDetails = res
      res.games.forEach(element => {
        if ((element.hname === this.favTeam || (element.ateam === this.favTeam) ) && element.complete==100) {
          //  console.log(element)
          this.dataSource.push(element)
        }

      });
    });

    console.log(this.dataSource)
    // console.log(this.route.snapshot.queryParamMap.get("page"))
    // this.route.params.subscribe(event => {
    //   console.log(event.page);

    // });
  }

}
