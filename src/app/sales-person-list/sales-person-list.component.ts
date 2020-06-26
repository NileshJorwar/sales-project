import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Sachin","Jorwar","sachinjorwar@gmail.com",1000),
    new SalesPerson("Nilesh","Jorwar","sachinjorwar@gmail.com",500),
    new SalesPerson("Ashish","Jorwar","sachinjorwar@gmail.com",9000),
    new SalesPerson("Ramesh","Jorwar","sachinjorwar@gmail.com",8000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
