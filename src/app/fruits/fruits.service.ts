import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruits } from './Fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private  http: HttpClient) { }

  getFruits() {
    return this.http.get<Fruits[]>('http://localhost:3000/fruits');
 }
}

