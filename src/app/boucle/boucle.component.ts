import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent implements OnInit {

  arr=[
    {name:'ahmed', age:'25'},
    {name:'chahir' , age:'26'  },
    {name:'amir' , age:'22'},
  ];
  arr1=['js','html','css'] ;
 

  constructor() { }

  ngOnInit() {
  }

}
