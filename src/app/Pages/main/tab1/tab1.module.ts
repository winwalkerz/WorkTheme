import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tab1RoutingModule } from './tab1-routing.module';
import { Tab1Component } from './tab1.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [Tab1Component],
  imports: [
    CommonModule,
    Tab1RoutingModule,
    NzLayoutModule,
    NzTabsModule,
    NzGridModule,
    NzCardModule
  ]
})
export class Tab1Module { }
