import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
   
/*    frstname:string ;
    lastname:string ;
    email:string ;
    password:string ;
  */
   tab=[] ;
   personne:FormGroup;
  

  
  constructor() {
    this.personne = new FormGroup({
      frstname:new FormControl() ,
      lastname:new FormControl() ,     email:new FormControl() ,
      password: new FormControl() ,
     })
   }

  ngOnInit() {
  }
  
/*remplire(){
 let  personne ={
    firstname: this.frstname ,
    lstname:this.lastname ,
    email:this.email ,
    password: this.password
   }
this.tab.push(personne)
console.log(this.tab);

}*/
remplire(){
  this.tab.push(this.personne.value);
  console.log(this.tab);
  
}
}
