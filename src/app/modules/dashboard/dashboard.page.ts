import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { SharedComponentsModule } from 'src/app/shared/components/shared.components.module';
import { profileFormConfig } from 'src/app/core/constants/profile.form';
import { IForm } from 'src/app/core/models/form.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, SharedComponentsModule],
})
export class DashboardPage implements OnInit {
  profileForm = profileFormConfig as IForm;
  constructor() {}

  ngOnInit() {}
}
