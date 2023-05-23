import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';
import { NavigationExtras, Router} from '@angular/router'
import { AlertController, ToastButton, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaAtores: IAtores[] = [
    {
      nome: 'Robert Downey Jr.',
      nascimento: "4 de abril de 1965",
      idade: 58,
      foto: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg",
      filmes: ['Vingadores', 'Homem de Ferro'],
      favorito: false
    }
  ];

  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'], navigationExtras)
  }

}
