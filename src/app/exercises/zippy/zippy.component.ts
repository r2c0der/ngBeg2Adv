import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rkm-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('zippy-title') title;
  @Input('zippy-content') content;

  constructor() { }

  ngOnInit() {
  }

}
