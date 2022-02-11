import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Location} from "@angular/common";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private titleService:Title, private location: Location) {
    this.titleService.setTitle("Error");
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
