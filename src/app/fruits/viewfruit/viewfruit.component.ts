import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Fruits } from '../Fruits'

import { FruitsService } from '../fruits.service';

@Component({
  selector: 'voyager-viewfruit',
  templateUrl: './viewfruit.component.html',
  styleUrls: ['./viewfruit.component.scss']
})
export class ViewfruitComponent {
  testItem:any;
  constructor(private fruitService: FruitsService) {}
 
  ngOnInit(): void {
    this.getFruits();
  }
 
  getFruits() {
    this.fruitService.getFruits().subscribe((data) => {
     this.testItem = data;
    });
  }

  

}
