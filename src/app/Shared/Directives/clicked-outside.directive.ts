import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import { Subscription, filter, fromEvent } from 'rxjs';

@Directive({
  selector: '[appClickedOutside]'
})
export class ClickedOutsideDirective implements AfterViewInit, OnDestroy   {
  @Output() public clickedOutside = new EventEmitter<void>();

  documentClickSubscription: Subscription | undefined;

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) { }
  ngAfterViewInit(): void {
    this.documentClickSubscription = fromEvent(this.document, 'click').pipe(
      filter((event) => {
        return !this.isInside(event?.target as HTMLElement)
      })
    ).subscribe(() => {
      this.clickedOutside.emit();
    })
  }
  ngOnDestroy(): void {
    this.documentClickSubscription?.unsubscribe();
  }
  isInside(elementToCheck: HTMLElement): boolean {
    return elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck);
  }
}
