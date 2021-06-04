import { Injectable } from "@angular/core";

@Injectable()
export class PhotoService {
    listPhoto: string[] = [];
    
    ajouterPhoto(maNouvellePhoto: string) {
        this.listPhoto.push(maNouvellePhoto);
    }
}