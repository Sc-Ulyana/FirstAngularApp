import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {NotificationService} from "../../service/notification.service";

@Component({ selector: 'note', templateUrl: 'notification.component.html'})
export class NotificationComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.subscription = this.notificationService.getAlert()
      .subscribe(message => {
        switch (message && message.type) {
          case 'success':
            message.cssClass = 'success';
            break;
          case 'error':
            message.cssClass = 'error';
            break;
        }

        this.message = message;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
