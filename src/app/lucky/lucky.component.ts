import { Component, OnDestroy, OnInit } from '@angular/core';
import { LuckyService } from './lucky.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
 template: `
  <p>You are checking if you are lucky {{displayCount1}} time</p>
  <p>Your lucky number is: {{number1}}</p>
  <p>Another lucky number is: {{number2}}</p>
 `
})
export class LuckyComponent implements OnInit, OnDestroy {
 public number1: number;
 public number2: number;

 private onDestroy$: Subject<void> = new Subject<void>();

 constructor(private luckyService: LuckyService) {}

 public ngOnInit(): void {
   const subscriberCount1 = this.luckyService.getSubscribersCount();
   this.luckyService.getLuckyNumber()
     .pipe(takeUntil(this.onDestroy$))
     .subscribe((luckyNumber: number) => {
      this.number1 = luckyNumber;
       console.log(`Retrieved lucky number ${this.number1} for subscriber ${subscriberCount1}`);
   });

   const subscriberCount2 = this.luckyService.getSubscribersCount();
   this.luckyService.getLuckyNumber()
     .pipe(takeUntil(this.onDestroy$))
     .subscribe((luckyNumber: number) => {
      this.number2 = luckyNumber;
       console.log(`Retrieved lucky number ${this.number2} for subscriber ${subscriberCount2}`);
   });
 }

 public ngOnDestroy(): void {
   this.onDestroy$.next();
 }
}
