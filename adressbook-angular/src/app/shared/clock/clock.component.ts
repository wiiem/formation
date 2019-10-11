import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  now = new Date();
  private interval;

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
