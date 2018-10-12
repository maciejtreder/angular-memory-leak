import { Component, OnDestroy, OnInit } from '@angular/core';
import { LuckyService } from './lucky.service';
import { Subscription } from 'rxjs';

@Component({
 template: `
   <p>You are checking if you are lucky {{displayCount}} time</p>
   <p>Your lucky number is: {{number}}</p>
`,
})
export class LuckyComponent implements OnInit, OnDestroy {
 public subscribersCount = 0;
 public number: number;

 private luckySubscription$: Subscription;

 constructor(private luckyService: LuckyService) {}

 public ngOnInit(): void {
   this.luckySubscription$ = this.luckyService.getLuckyNumber().subscribe((luckyNumber: number) => {
    this.number = luckyNumber;
    console.log(`Retrieved lucky number ${this.number} for subscriber ${this.subscribersCount}`);
   });
   this.subscribersCount = this.luckyService.getSubscribersCount();
 }

 public ngOnDestroy(): void {
   this.luckySubscription$.unsubscribe();
 }
}
