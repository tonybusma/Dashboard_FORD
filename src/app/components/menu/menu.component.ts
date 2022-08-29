import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuExpos = false;

  constructor() { }

  ngOnInit(): void {
  }

  menuOpen() {
    this.menuExpos = !this.menuExpos;
  }

}
