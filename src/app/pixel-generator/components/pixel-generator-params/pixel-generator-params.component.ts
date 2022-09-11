import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { PixelGeneratorService } from "../../pixel-generator.service";

@Component({
  selector: 'app-pixel-generator-params',
  templateUrl: './pixel-generator-params.component.html',
  styleUrls: ['./pixel-generator-params.component.scss']
})
export class PixelGeneratorParamsComponent implements OnInit {

  @Output() generate = new EventEmitter<any>();

  public form = new FormGroup({
    haveFrame: new FormControl(true),
    isDarkMode: new FormControl(false)
  })

  constructor(
    private readonly pixelGeneratorService: PixelGeneratorService
  ) { }

  public ngOnInit(): void {
    this.form.controls['haveFrame'].valueChanges
      .subscribe(() => {
        this.pixelGeneratorService.haveFrame$.next(this.form.get('haveFrame')?.value)
      })
    this.form.controls['isDarkMode'].valueChanges
      .subscribe(() => {
        this.pixelGeneratorService.isDarkMode$.next(this.form.get('isDarkMode')?.value)
      })
  }

  public onClick(): void {
    this.generate.emit();
  }

}
