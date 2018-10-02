import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SettingsService {
  public sidebarImageIndex = 0;
  public sidebarImageIndexUpdate: EventEmitter<number> = new EventEmitter();
  public sidebarFilter = '#fff';
  public sidebarFilterUpdate: EventEmitter<string> = new EventEmitter();
  public sidebarColor = localStorage.getItem("bgColor");
  public sidebarColorUpdate: EventEmitter<string> = new EventEmitter();

  constructor() { }

  getSidebarImageIndex() {
   let bgId : any
   bgId = parseFloat(localStorage.getItem("bgImg"))
   if(bgId=== null){
      bgId = 0
   }else{
      bgId = bgId
   }
    return bgId
  }
  setSidebarImageIndex(id) {
   localStorage.setItem(id,"bgImg")
    this.sidebarImageIndex = id;
    this.sidebarImageIndexUpdate.emit(this.sidebarImageIndex);
  }
  getSidebarFilter(): string {
    return this.sidebarFilter;
  }
  setSidebarFilter(color: string) {
    this.sidebarFilter = color;
    this.sidebarFilterUpdate.emit(this.sidebarFilter);
  }
  getSidebarColor(): string {
     if(this.sidebarColor === null){
      this.sidebarColor = "#AD1F22"
     }
    return this.sidebarColor;
  }
  setSidebarColor(color: string) {
    this.sidebarColor = color;
    this.sidebarColorUpdate.emit(this.sidebarColor);
  }
}
