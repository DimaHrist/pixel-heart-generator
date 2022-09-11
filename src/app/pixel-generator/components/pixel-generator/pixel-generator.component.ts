import { Component, OnInit } from '@angular/core';
import { PixelGeneratorService } from "../../pixel-generator.service";

@Component({
  selector: 'app-pixel-generator',
  templateUrl: './pixel-generator.component.html',
  styleUrls: ['./pixel-generator.component.scss']
})
export class PixelGeneratorComponent {

  private darkColors = [
    '#000000',
    '#005c34',
    '#101d59',
    '#4d0608',
    '#222f00',
    '#3f2205',
    '#38034f',
    '#023323',
    '#161344',
    '#520825',
    '#343434',
    '#232323',
    '#310231',
    '#421212',
    '#273a34',
  ]

  constructor(private readonly pixelGeneratorService: PixelGeneratorService) { }

  private colorRandomizer(): string {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`
  }

  private darkColorRandomizer(): string {
    var rand = Math.floor(Math.random() * this.darkColors.length);
    return this.darkColors[rand];
  }

  public generate(): void {
    this.pixelGeneratorService.heartColor$.next(this.colorRandomizer());
    if (this.pixelGeneratorService.isDarkMode$.getValue()) {
      this.pixelGeneratorService.frameColor$.next(this.darkColorRandomizer());
    } else {
      this.pixelGeneratorService.frameColor$.next(this.colorRandomizer());
    }
  }
}
