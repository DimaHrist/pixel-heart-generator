import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelGeneratorRoutingModule } from "./pixel-generator-routing.module";
import { PixelGeneratorComponent } from './components/pixel-generator/pixel-generator.component';
import { PixelGeneratorCardComponent } from './components/pixel-generator-card/pixel-generator-card.component';
import { PixelGeneratorParamsComponent } from './components/pixel-generator-params/pixel-generator-params.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PixelGeneratorComponent,
    PixelGeneratorCardComponent,
    PixelGeneratorParamsComponent
  ],
  imports: [
    CommonModule,
    PixelGeneratorRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PixelGeneratorModule { }
