import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PixelGeneratorService {

  public haveFrame$ = new BehaviorSubject(true);
  public isDarkMode$ = new BehaviorSubject(false);
  public heartColor$ = new BehaviorSubject('#000000');
  public frameColor$ = new BehaviorSubject('red');

  constructor() { }
}
