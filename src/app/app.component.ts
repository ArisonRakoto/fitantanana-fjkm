import { Component } from '@angular/core';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { SharedComponentsModule } from './shared/components/shared.components.module';
import {
  closeOutline,
  gridOutline,
  gridSharp,
  logOutOutline,
  peopleOutline,
  peopleSharp,
  personCircleOutline,
  personCircleSharp,
  settingsOutline,
  trendingDownOutline,
  trendingDownSharp,
  trendingUpOutline,
  trendingUpSharp,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonRouterOutlet,
    SharedComponentsModule,
  ],
})
export class AppComponent {
  constructor() {
    addIcons({
      // Menu
      gridOutline,
      personCircleOutline,
      peopleOutline,
      trendingUpOutline,
      trendingDownOutline,
      logOutOutline,
      settingsOutline,
      closeOutline,

      gridSharp,
      peopleSharp,
      personCircleSharp,
      trendingUpSharp,
      trendingDownSharp,
    });
  }
}
