import { Component, OnInit } from '@angular/core';
import { PixelGeneratorService } from "../../pixel-generator.service";

@Component({
  selector: 'app-pixel-generator-card',
  templateUrl: './pixel-generator-card.component.html',
  styleUrls: ['./pixel-generator-card.component.scss']
})
export class PixelGeneratorCardComponent implements OnInit {

  public haveFrame$ = this.pixelGeneratorService.haveFrame$
  public heartColor$ = this.pixelGeneratorService.heartColor$
  public frameColor$ = this.pixelGeneratorService.frameColor$

  constructor(
    private readonly pixelGeneratorService: PixelGeneratorService
  ) {
  }

  ngOnInit(): void {
  }

}
