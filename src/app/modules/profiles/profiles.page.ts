import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../../shared/components/shared.components.module';
import { IProfile } from 'src/app/core';
import { addIcons } from 'ionicons';
import { createOutline, trashOutline } from 'ionicons/icons';

const columns = [
  {
    header: 'N° Fiang',
    accessor: 'noFiang',
  },
  {
    header: 'Anarana',
    accessor: 'nom',
  },
  {
    header: 'Adiresy',
    accessor: 'adresse',
    class: 'hidden md:table-cell',
  },
  {
    header: 'Fifandraisana',
    accessor: 'contact',
    class: 'hidden md:table-cell',
  },
  {
    header: '#',
    accessor: 'action',
    class: 'items-center',
  },
];

const profile = [
  {
    id: 1,
    noFiang: 'S-025-1/DVM',
    fname: 'ANDRIAMIRADO',
    lname: 'Armand',
    sexe: 'Masculin',
    dob: '1987-02-12',
    photo_url: null,
    address: 'Lot III K 44 CA Andavamamba Anjezika I',
    contact: '0343559212',
    marital_status: null,
  },
  {
    id: 2,
    noFiang: 'S-025-1/DVM',
    fname: 'ANDRIAMIRADO',
    lname: 'Armand',
    sexe: 'Masculin',
    dob: '1987-02-12',
    photo_url: null,
    address: 'Lot III K 44 CA Andavamamba Anjezika I',
    contact: '0343559212',
    marital_status: null,
  },
];

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
  imports: [
    IonContent,
    // IonicModule,
    CommonModule,
    FormsModule,
    SharedComponentsModule,
  ],
})
export class ProfilesPage implements OnInit {
  profileColumns = columns;
  profiles = profile;
  showModal = false;

  rows: (item: IProfile) => `<tr>
    <td>{{ item.noFiang}}</td>
    <td>{{ item.fname}} {{ item.lname}}</td>
    <td class="hidden md:table-cell">{{ item.address}}</td>
    <td class="hidden md:table-cell">{{ item.contact}}</td>
    <td>
      <div class="flex items-center gap-2">
        <button
          class="w-7 h-7 flex items-center justify-center rounded-full bg-green-500"
        >
          <ion-icon slot="icon-only" name="create-outline"></ion-icon>
        </button>

        <button
          class="w-7 h-7 flex items-center justify-center rounded-full bg-red-500"
        >
          <ion-icon slot="icon-only" name="trash-outline"></ion-icon>
        </button>
      </div>
    </td>
  </tr>`;

  constructor() {
    addIcons({
      createOutline,
      trashOutline,
    });
  }

  ngOnInit() {}

  openModal() {
    this.showModal = !this.showModal;
  }
}
