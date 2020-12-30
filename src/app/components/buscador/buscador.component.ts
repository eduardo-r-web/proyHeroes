import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  busqueda: string;
  heroes = [];
  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.busqueda = params['busqueda'];
      this.heroes = this._heroesService.buscarHeroe(params['busqueda']);
      console.log(this.heroes);
      
    });
    
  }

}
