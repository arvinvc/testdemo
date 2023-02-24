import { Component } from '@angular/core';
import { Fruits } from '../Fruits';
import { FruitsService } from '../fruits.service';
@Component({
  selector: 'voyager-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  allFruits: Fruits[] = [];

  constructor(private fruitService: FruitsService) {}
 
  ngOnInit(): void {
   
  }
 
 
  
}
