import { Component, OnInit, ContentChildren, QueryList, ViewChildren, ElementRef, ViewChild, Input, Directive, AfterViewInit } from '@angular/core';
import { AnimationPlayer, AnimationFactory, animate, style, AnimationBuilder } from '@angular/animations';
import { CarouselItemDirective } from './carousel-item.directive';


@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {
}

@Component({
  selector: 'carousel',
  exportAs: 'carousel',
  template: `
    <section class="carousel-wrapper" [ngStyle]="carouselWrapperStyle">
      <ul class="carousel-inner" #carousel>
        <li *ngFor="let item of items;" class="carousel-item">
          <ng-container [ngTemplateOutlet]="item.tpl"></ng-container>
        </li>
      </ul>
    </section>
    <div *ngIf="showControls" style="margin-top: 1em">
    
    <button mat-stroked-button color="primary"  (click)="next()">
      Next
      </button>
      <button mat-stroked-button color="primary" (click)="prev()">
      Prev
      </button>
      
    </div>
  `,
  styles: [`
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 6000px;
    }

    .carousel-wrapper {
      overflow: hidden;
      display:inline-flex;
      text-align:center;
    }

    .carousel-inner {
      display: flex;
    }

  `]
})

export class CarouselitemComponent implements AfterViewInit {
  

  @ContentChildren(CarouselItemDirective) items : QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements : QueryList<ElementRef>;
  @ViewChild('carousel') private carousel : ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private player : AnimationPlayer;
  private itemWidth : number;
  private currentSlide = 0;
  carouselWrapperStyle = {}

  next() {
    if( this.currentSlide + 1 === this.items.length ) return;
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation : AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  private buildAnimation( offset ) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  prev() {
    if( this.currentSlide === 0 ) return;

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation : AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  constructor( private builder : AnimationBuilder ) {
  }

  ngAfterViewInit() {
    // For some reason only here I need to add setTimeout, in my local env it's working without this.
     setTimeout(() => {
      this.itemWidth = 300;
      // this.itemsElements.first.nativeElement.getBoundingClientRect().width;
      
      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`
      }
     });
    
  }


}
