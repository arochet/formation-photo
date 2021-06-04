import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-afficher-photo',
  templateUrl: './afficher-photo.component.html',
  styleUrls: ['./afficher-photo.component.scss'],
})
export class AfficherPhotoComponent implements OnInit {

  @Input() photo: string = "";//On peut écrire <app-afficher-photo photo="qmsldkjf">

  constructor() { }

  ngOnInit() {}

}
