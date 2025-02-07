import {Component} from '@angular/core';
import {map, share, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-stecher',
  templateUrl: 'stecher.page.html',
  styleUrls: ['./stecher.page.scss'],
  standalone: false,
})
export class StecherPage {

  constructor() {
  }

  rxTime = new Date();
  subscription: Subscription | undefined;

  isRunning: boolean = false;

  private interval: any;
  public time: string = '00:00:00';
  private seconds: number = 0;


  startTimer(): void {
    if (this.interval) {
      return;
    }
    this.interval = setInterval(() => {
      this.seconds++;
      const hours = Math.floor(this.seconds / 3600);
      const minutes = Math.floor((this.seconds % 3600) / 60);
      const remainingSeconds = this.seconds % 60;
      this.time = this.formatTime(hours, minutes, remainingSeconds);
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.interval);
    this.interval = null;
    this.resetTimer()
  }

  resetTimer(): void {
    clearInterval(this.interval);
    this.interval = null;
    this.seconds = 0;
    this.time = '00:00:00';
  }

  private formatTime(hours: number, minutes: number, seconds: number): string {
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  startStopPressed(): void {
    this.isRunning = !this.isRunning;
    this.isRunning ? this.startTimer() : this.stopTimer();
  }

}
