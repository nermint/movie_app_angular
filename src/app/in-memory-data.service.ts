import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const movies=[
      {id:1, name:"Movie 1",description:"nice film",imgUrl:"1.jpg"},
      {id:2, name:"Movie 2",description:"nice film",imgUrl:"2.jpg"},
      {id:3, name:"Movie 3",description:"nice film",imgUrl:"3.jpg"},
      {id:4, name:"Movie 4",description:"nice film",imgUrl:"4.jpg"},
      {id:5, name:"Movie 5",description:"nice film",imgUrl:"5.jpg"},
      {id:6, name:"Movie 6",description:"nice film",imgUrl:"6.jpg"},
      {id:7, name:"Movie 7",description:"nice film",imgUrl:"7.jpg"},
  ];
  return {movies}
  }
}
