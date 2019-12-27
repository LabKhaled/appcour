import { Component, OnInit, Output, Input  } from '@angular/core';
import { AppareilService } from '../Services/appareil.service';
@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName;
  @Input() appareilStatus;
  @Input() index :number;
  

  constructor(private appareilServ:AppareilService) { }

  ngOnInit() {
  }
  getStatus(){
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus==='allumé') {return 'green';}
    else if (this.appareilStatus==='éteint')  {return 'red';}
}

etindre(){
  this.appareilServ.switchonoff(this.index);
  
}

allumer(){

  this.appareilServ.switchonon(this.index);
   
 } 



}
