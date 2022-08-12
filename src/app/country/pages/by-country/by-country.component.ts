
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.sass']
})
export class ByCountryComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];
  paisesSug : Country [] = [];
  mostrarSug: boolean = false;

  constructor( private paisService: CountryService ) { }

  buscar( termino: string ) {
    
    this.hayError = false;
    this.termino  = termino;
    this.mostrarSug = false;

    this.paisService.searchByCountry( termino )
      .subscribe( (paises) => {
        this.paises = paises;
        
      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });

  }

  sugerencias( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSug = true;
    this.paisService.searchByCountry(termino)
      .subscribe(
        paises => this.paisesSug = paises.splice(0,3),
        (err)=> this.paisesSug = [])
  }

}
