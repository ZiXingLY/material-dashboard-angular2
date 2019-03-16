import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.scss']
})
export class EmotionsComponent implements OnInit {
  data = [[1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5]];
  columns = ['h1',
      'h2',
      'h3',
      'h4',
      'h5']

  constructor() { }

  ngOnInit() {
  }

}
