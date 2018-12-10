import { templateJitUrl } from "@angular/compiler";
import { stringify } from "querystring";

export class Releve {
    constructor(o){
        if (o.id){
            this.id = o.id;
        } else {
            this.id = this.guid();
          }
        if (o.date){
            this.date = o.date;
        }
        if (o.temperature){
            this.temperature = o.temperature;
        }
        if (o.humidite){
            this.humidite = o.humidite;
        }
        if (o.ensoleillement){
            this.ensoleillement = o.ensoleillement;
        }
        if (o.idVille){
            this.idVille = o.idVille;
        }
        
    }
    private guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    
    id: string;
    date: Date;
    temperature: number;
    humidite: number;
    ensoleillement: number;
    idVille: string;
   }