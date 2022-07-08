import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = [];

  constructor(private ativeRoute: ActivatedRoute, private heroeService: HeroesService, private router: Router) {
      this.ativeRoute.params.subscribe(params => {
      this.heroe = this.heroeService.getHeore(params['id']);
    });
  }

  ngOnInit(): void {
  }

  verHeroes(){
    this.router.navigate(['/heroes'])
  }

}
