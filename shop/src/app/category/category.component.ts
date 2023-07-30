import { Component } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent {

  title = "Kategori Listesi";
  constructor(private categoryService: CategoryService) {

  }

  categories: Category[];

  ngOnInit(): void {
    this.categoryService.getProducts().subscribe(data=>{
      this.categories = data
    });
  }
}
