import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PixelGeneratorComponent } from "./components/pixel-generator/pixel-generator.component";

const routes: Routes = [
  {
    path: '',
    component: PixelGeneratorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PixelGeneratorRoutingModule { }
