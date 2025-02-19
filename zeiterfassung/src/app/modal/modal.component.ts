import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  providers: [ModalController],
  imports: [FormsModule, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonTitle, IonToolbar, IonInput],
})
export class ModalComponent {
  name!: string;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
