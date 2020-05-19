import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ]

  

  

  addSlide() {
    this.items.push({
      title: `Slide 4`
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
