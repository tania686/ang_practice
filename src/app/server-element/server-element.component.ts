import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  ContentChild,
  ElementRef
} from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() element: { type: string; name: string; content: string };
  @Input() name: string;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
}
