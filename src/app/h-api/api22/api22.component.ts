import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-api22',
  templateUrl: './api22.component.html',
  styleUrls: ['./api22.component.css']
})
export class Api22Component implements OnInit {

  homeId:number;
  constructor(
    private routerIonfo:ActivatedRoute
  ) { }

  ngOnInit() {
    this.homeId=this.routerIonfo.snapshot.params["id"];
    console.log(this.homeId);
    console.log(this.routerIonfo);
  }

}
