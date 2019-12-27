export class AppareilService{

    appareils=[
        {name:'Machine à laver',status:'éteint'},
        {name:'Frigo',status:'allumé'},
        {name:'Ordinateur',status:'éteint'}
      ]

      switchOnAll(){
        for(let appar of this.appareils)
        {appar.status='allumé';}
   

    }

    switchOffAll(){
      for(let appar of this.appareils)
      {appar.status='éteint';}
 
  }
  switchonon(i: number){
    this.appareils[i].status='allumé';
  }

switchonoff(i: number){
    this.appareils[i].status='éteint';
}
    
    }