export class Ville {
    constructor(o){
        if (o.id){
            this.id = o.id;
        }
        if (o.nom){
            this.nom = o.nom;
        }
        if (o.longitude){
            this.longitude = o.longitude;
        }
        if (o.latitude){
            this.latitude = o.latitude;
        }
    }

    id: number;
    nom: string;
    latitude: number;
    longitude: number;
   }