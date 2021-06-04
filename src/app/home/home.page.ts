import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public photoService: PhotoService) {}

  async buttonOuvrirCamera() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });

    this.photoService.ajouterPhoto(`data:image/jpeg;base64,${image.base64String}`);
  }
}
