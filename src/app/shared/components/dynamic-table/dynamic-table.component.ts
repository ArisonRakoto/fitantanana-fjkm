import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  imports: [IonicModule],
})
export class DynamicTableComponent implements OnInit {
  @Input({ required: true }) columns: any;
  @Input({ required: true }) data: any;

  constructor() {}

  ngOnInit() {}
}
