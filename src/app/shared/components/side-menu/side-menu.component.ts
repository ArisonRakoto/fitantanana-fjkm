import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';

const menuItems = [
  {
    title: 'Ankapobeny',
    icon: 'grid',
    url: '/dashboard',
    visible: ['admin', 'user', 'final_user'],
  },
  {
    title: 'Mpiangona',
    icon: 'people',
    url: '/profiles',
    visible: ['admin', 'user', 'final_user'],
  },
  {
    title: 'Vola Miditra',
    icon: 'trending-up',
    url: '/income',
    visible: ['admin', 'user', 'final_user'],
  },
  {
    title: 'Vola Mivoaka',
    icon: 'trending-down',
    url: '/expenses',
    visible: ['admin', 'user', 'final_user'],
  },
  {
    title: 'Mpampiasa',
    icon: 'people-circle',
    url: '/users',
    visible: ['admin', 'user', 'final_user'],
  },
];

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonicModule],
})
export class SideMenuComponent implements OnInit {
  public appPages = menuItems;

  constructor() {}

  ngOnInit() {}
}
