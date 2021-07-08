import { AfterViewInit, ContentChildren, Directive, QueryList } from '@angular/core';
import { createSingleton } from 'tippy.js';
import { ToolTipDirective } from './tool-tip.directive';

@Directive({
  selector: '[appToolTipSingleton]'
})
export class ToolTipSingletonDirective implements AfterViewInit{

  @ContentChildren(ToolTipDirective, { descendants: true}) 
  elementsWithToolTips!: QueryList<ToolTipDirective>

  singletonInstance: any;


  constructor() { }

  ngAfterViewInit(){
    this.singletonInstance = createSingleton(this.getTippyInstantces(), {
      delay: [400, 0],
      moveTransition: 'transform 0.2s ease-out'
    })
    this.elementsWithToolTips.changes.subscribe(() => {
      this.singletonInstance.setInstances(this.getTippyInstantces)
    })
  }

  getTippyInstantces(){
    return this.elementsWithToolTips
    .toArray()
    .map((t) =>{
      return t.tippyInstance
    })
  }

}
