import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html'  ,
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  img="./../../assets/escale,Paris-France_zoom,FR,PAR,32716.jpg" ;
  col=5; //attribut binding
  isactive=true ;
  open:true ;
 num1 : string ;
 num2 : string ;  
     
   
  
  
//  @Input() n1:number ;
 // @Input() n2:number ;
 
  constructor() { }

  ngOnInit() {
  }
login(){
  console.log("login")
}
addition(){
var somme:number ;
var n1:number =parseInt(this.num1) ;
var n2:number =parseInt(this.num2);
somme=n1+n2;
console.log(somme);
return somme 

}
sous() {
  var sous:number ;
  var n1:number =parseInt(this.num1) ;
var n2:number =parseInt(this.num2);
sous=n1-n2 ;
console.log(sous) ;
return sous 
}
multiple(){
  var mul:number ;
  var n1:number =parseInt(this.num1) ;
var n2:number =parseInt(this.num2);
mul=n1*n2 ;
console.log(mul) ;
return mul
}
Division() {
  var div:number ;
  var n1:number =parseInt(this.num1) ;
var n2:number =parseInt(this.num2);
div=n1/n2 ;
console.log(div) ;
return div
}
}




