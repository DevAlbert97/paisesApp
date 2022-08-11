import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styleUrls: ['./table-country.component.sass']
})
export class TableCountryComponent implements OnInit {

  @Input() paises: Country[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}