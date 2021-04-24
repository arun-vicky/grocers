import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  productList = [{
    id: '1',
    name: 'Aashirvaad Superior MP Atta, 5kg',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    price: '100',
    description: 'Aashirvaad Superior MP Atta is made using the 4-step advantage process which ensures 100% pure and natural whole wheat atta and retention of its natural dietary fibres and nutrients'
  },{
    id: '2',
    name: 'Aashirvaad Superior MP Atta, 5kg',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    price: '100',
    description: 'Aashirvaad Superior MP Atta is made using the 4-step advantage process which ensures 100% pure and natural whole wheat atta and retention of its natural dietary fibres and nutrients'
  }];
  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  openProductDialog(product?: any) {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: product || {}
    });
    dialogRef.afterClosed().subscribe(value => {
      this.productList.push(value);
    });
  }
}
