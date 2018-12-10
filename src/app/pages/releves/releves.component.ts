import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Releve } from '../../models/Releve';


@Component({
  selector: 'app-releves',
  templateUrl: './releves.component.html',
  styleUrls: ['./releves.component.css'],
  providers: [DataService]
})
@Injectable()
export class RelevesComponent implements OnInit {
  idVille: string;
  nomVille: string;
  latitude: number;
  longitude: number;
  listeReleves = [];
  releve: Releve = new Releve({
    id: null,
    date: new Date(),
    temperature: 20,
    humidite: 10,
    ensoleillement: 2,
    idVille: this.idVille
  });
 
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      this.nomVille = params.nomVille;
      this.latitude = params.latitude;
      this.longitude = params.longitude;
      this.idVille = params.idVille;
      this.loadData(params.idVille);
    });
  }

  loadData(idVille) : Promise<any> {
    return this.dataService.getReleves(idVille).then((resData) => {
           this.listeReleves = resData;
    });
  }

  ajouterData() {
    this.releve.date = new Date();
    this.releve.idVille = this.idVille;
    this.dataService.sendToAPI(this.releve).then(() => {
      this.loadData(this.idVille).then(() => {
        this.releve = new Releve({
          id: null,
          date: new Date(),
          temperature: 13,
          humidite: 14,
          ensoleillement: 3,
          idVille: this.idVille
        });
        this.router.navigate(['/releves', { idVille: this.idVille, nomVille: this.nomVille, latitude: this.latitude, longitude: this.longitude }]);
      });
    });
  }

  supprimerData(id) {
        this.releve.date = null;
        this.releve.idVille = null;
        this.dataService.deleteToAPI(id).then(() => {
        this.loadData(this.idVille).then(() => {
        this.router.navigate(['/releves', { idVille: this.idVille, nomVille: this.nomVille, latitude: this.latitude, longitude: this.longitude 
        }]);
      });
    });
  }

  modifierData(rel : Releve){
    this.dataService.putToAPI(rel).then(() => {
         this.loadData(this.idVille).then(() => {
         this.router.navigate(['/releves', { idVille: this.idVille, nomVille: this.nomVille, latitude: this.latitude, longitude: this.longitude
        }]);
      });
    });
  }

}
