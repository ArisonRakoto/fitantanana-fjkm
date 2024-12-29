import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DynamicModalComponent } from './dynamic-modal/dynamic-modal.component';
import { PaginationComponent } from './pagination/pagination.component';

export const components = [
  HeaderComponent,
  SideMenuComponent,
  SearchBarComponent,
  DynamicFormComponent,
  DynamicCardComponent,
  DynamicTableComponent,
  DynamicModalComponent,
  PaginationComponent,
];

@NgModule({
  imports: [
    ...components,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedComponentsModule {}
