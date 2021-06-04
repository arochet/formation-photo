import { Injectable } from "@angular/core";

@Injectable()
export class PhotoService {
    listPhoto: string[] = [];
    
    ajouterPhoto(photo: string) {
        this.listPhoto.push(photo);
    }
}