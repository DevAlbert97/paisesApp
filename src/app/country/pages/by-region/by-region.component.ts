import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.sass']
})
export class ByRegionComponent{

  regions: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countrys : Country[] = [];

  constructor(private regionService: CountryService) { }

  activateRegion(region:string) {
    if (region === this.activeRegion) {return;}
    this.activeRegion = region;
    this.countrys = [];
    this.regionService.searchByRegion(region).subscribe((countrys)=>{
      this.countrys = countrys;
    });
  }
}
