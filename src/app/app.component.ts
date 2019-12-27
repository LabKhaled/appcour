import { Component,Input,OnInit } from '@angular/core';
import {AppareilService} from './Services/appareil.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  isAuth= true;
  appareils:any[];


  constructor(private appareilServ: AppareilService)
  {    
        setTimeout(
                     ()=>{this.isAuth=false;},4000);

  }

  ngOnInit(){

    this.appareils=this.appareilServ.appareils;


  }
  Touteteindre(){
    this.appareilServ.switchOffAll();
    
  }

  Toutallumer(){

    this.appareilServ.switchOnAll();
     
   } 

 
}
