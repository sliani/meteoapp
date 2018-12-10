import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Http, Headers, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css'],
  providers: [DataService]
})
export class VillesComponent implements OnInit {

  listeVilles = [];
  
  constructor(public dataService: DataService) { }


  ngOnInit() {
    this.dataService.getListeVilles()
    .then((resUserData => this.listeVilles = resUserData));
    
  }

}
