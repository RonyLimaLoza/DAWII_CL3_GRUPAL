import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.scss']
})
export class SolucionesComponent {
constructor (private route: ActivatedRoute, 
  private router: Router){

}

irPaginaHome(): void{
  this.router.navigate(['home'], {relativeTo: this.route});
}
irPaginaPromedio(): void{
  this.router.navigate(['promedio'], {relativeTo: this.route});
}
irPaginaLista01(): void{
  this.router.navigate(['lista01'], {relativeTo: this.route});
}
irPaginaLista02(): void{
  this.router.navigate(['lista02'], {relativeTo: this.route});
}

}
