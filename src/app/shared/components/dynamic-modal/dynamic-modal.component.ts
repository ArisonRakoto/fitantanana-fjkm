import { Component, inject, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrls: ['./dynamic-modal.component.scss'],
  imports: [IonicModule],
})
export class DynamicModalComponent implements OnInit {
  modalCtrl = inject(ModalController);
  @Input() title: string;
  @Input() modalType: string;
  @Input() showModal: boolean;
  @Input() type: any;

  constructor() {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
