import { Component, Input, OnInit, inject } from '@angular/core';
import { addIcons } from 'ionicons';
import { logOutOutline, settingsOutline } from 'ionicons/icons';
import { IonicModule, ModalController } from '@ionic/angular';
import { DynamicModalComponent } from '../dynamic-modal/dynamic-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule],
})
export class HeaderComponent implements OnInit {
  @Input() icon?: string;
  @Input() title?: string;
  modalCtrl = inject(ModalController);

  constructor() {
    addIcons({
      settingsOutline,
      logOutOutline,
    });
  }

  ngOnInit() {}

  async settings() {
    const modal = await this.modalCtrl.create({
      component: DynamicModalComponent,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      // cssClass: 'consult-modal-web',
    });
    await modal.present();
  }

  logout() {}
}
