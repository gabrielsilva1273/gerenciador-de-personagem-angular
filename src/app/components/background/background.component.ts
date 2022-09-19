import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({opacity: 0 }),
            animate('4s ease-out', 
                    style({opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('6s ease-in', 
                    style({opacity: 0 }))
          ]
        )
      ]
    )
  ]
})

export class BackgroundComponent implements OnInit {
  background1!:boolean;
  background2!:boolean;
  background3!:boolean;
  background4!:boolean;
  background5!:boolean;
  background6!:boolean;
  background7!:boolean;
  background8!:boolean;
  timeToChangeBackgroundInMs:number = 1000 * 45;
  constructor() { }

  ngOnInit(): void {
    this.clock();
  }

  sleep(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async clock(){
    let i = 0;
    let background = 0;
    while(true){
      background = (i % 8) + 1;
      i += 1;
      switch (background){
        case 1:
          this.background8 = false;
          this.background1 = true;
          break;
        case 2:
          this.background1 = false;
          this.background2 = true;
          break;
        case 3:
          this.background2 = false;
          this.background3 = true;
          break;
        case 4:
          this.background3 = false;
          this.background4 = true;
          break;
        case 5:
          this.background4 = false;
          this.background5 = true;
          break;
        case 6:
          this.background5 = false;
          this.background6 = true;
          break;
        case 7:
          this.background6 = false;
          this.background7 = true;
          break;
        case 8:
          this.background7 = false;
          this.background8 = true;
          break;
      }
      await this.sleep(this.timeToChangeBackgroundInMs);
    }
  }
}