import { Component, OnInit } from '@angular/core';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html'
})
export class TableBasicExample implements OnInit {
  public today: Date;
  ngOnInit(): void {
    console.log(this.today);
    ELEMENT_DATA.forEach(function(value) {
      var today = new Date();
      let displayBtn: boolean = false;
      displayBtn = value.date.getDate() > today.getDate();
      value.showBtn = displayBtn;
    });
  }
  displayedColumns = [
    'position',
    'name',
    'weight',
    'symbol',
    'date',
    'actions'
  ];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  showBtn: boolean;
  date: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    showBtn: false,
    date: new Date('2021-07-18')
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    showBtn: false,
    date: new Date('2021-07-22')
  }
];

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
