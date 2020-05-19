import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobileOpened = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuOpened() {
    this.mobileOpened = !this.mobileOpened;
  }

}
