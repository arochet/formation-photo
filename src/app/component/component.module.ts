import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { AfficherPhotoComponent } from "./afficher-photo/afficher-photo.component";

@NgModule({
    declarations: [AfficherPhotoComponent],
    exports: [AfficherPhotoComponent],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class ComponentModule {}