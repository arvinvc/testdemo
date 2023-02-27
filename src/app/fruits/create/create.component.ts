import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../Fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'voyager-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  fruitForm: Fruits= {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };

  constructor(private fruitService: FruitsService, private router: Router){}

  create(){
    this.fruitService.create(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fruits/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
