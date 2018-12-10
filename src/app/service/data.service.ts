import { Injectable } from '@angular/core';
import { Ville } from '../models/Ville';
import { HttpClient } from '@angular/common/http';
import { Releve } from '../models/Releve';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private postUrl = 'http://pc-formateur/odata/releves';
  private configUrl = 'http://pc-formateur/odata/villes';

  getListeVilles() : Promise<Ville[]>{
    return this.http.get(this.configUrl).toPromise()
    .then((c: any) => c.value)
    .then(to => to.map(o => new Ville(o)));
  }

  getReleves(idVille) : Promise<Releve[]>{
    return this.http.get(this.configUrl + '(guid\'' + idVille + '\')/releves').toPromise()
    .then((c: any) => c.value)
    .then(to => to.map(o => new Releve(o)));
  }

  sendToAPI(releve: Releve): Promise<any> {
    return this.http.post(this.postUrl, releve).toPromise();
  }

  deleteToAPI(id): Promise<any> {
    return this.http.delete(this.postUrl + '(guid\'' + id + '\')').toPromise();
  }

  putToAPI(releve : Releve): Promise<any> {
     return this.http.put(this.postUrl +  '(guid\'' + releve.id + '\')', releve).toPromise();
  }
}
