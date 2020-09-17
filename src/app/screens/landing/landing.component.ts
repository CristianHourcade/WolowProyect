import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  goWolowsTwitter() {
    window.open('https://twitter.com/Wolox', '_blank');
  }

  goWoloxWebSite() {
    window.open('https://www.wolox.com.ar/', '_blank');
  }
}
