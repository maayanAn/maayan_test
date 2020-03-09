import { Component, OnInit } from '@angular/core';
import { GridService } from '../grid.service';
import { Row } from '../row';
import { Col } from '../col';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  columnDefs: Col[] = [];
  rowData: Row[] = [];
    
  constructor(private gridService: GridService) { }

  ngOnInit(): void {
    this.createGrid();
  }

  private createGrid(): void {
    this.setGridCols();
    this.getGridData();
  }

  private getGridData(): void {
    this.gridService.getData().subscribe((data: Row[]) => {
      if (data) {
        this.rowData = data;
      }
    });
    
  }
  private setGridCols(): void {
    this.columnDefs = [
      {headerName: 'Id', field: 'id', filter: true },
      {headerName: 'First_Name', field: 'first_name', filter: true },
      {headerName: 'Last_Name', field: 'last_name', filter: true},
      {headerName: 'Email', field: 'email', filter: true },
      {headerName: 'Gender', field: 'gender', filter: true },
      {headerName: 'Ip_Adress', field: 'ip_address', filter: true}
  ];
  }

}
