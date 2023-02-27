import { Component } from '@angular/core';
import { Fruits } from '../Fruits';
import { FruitsService } from '../fruits.service';

declare let window: any;
@Component({
  selector: 'voyager-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  allFruits: Fruits[] = [];
  deleteModal: any;
  idTodelete: number = 0;
  constructor(private fruitService: FruitsService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.getFruits();
 
  }
  getFruits() {
    this.fruitService.getFruits().subscribe((data) => {
     this.allFruits = data;
    });
  }
  
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.fruitService.delete(this.idTodelete).subscribe(
     (data) => {
        this.allFruits = this.allFruits.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    );
  }
}
