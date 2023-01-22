import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testgrid',
  templateUrl: './testgrid.component.html',
  styleUrls: ['./testgrid.component.scss']
})
export class TestgridComponent implements OnInit {

    public gridData: any = [
      {
          ProductID: 1,
          ProductName: 'Chai',
          UnitPrice: 18,
          Category: {
              CategoryID: 1,
              CategoryName: 'Beverages'
          }
      }

    ];

  constructor() { }

  ngOnInit(): void {
  }

}

