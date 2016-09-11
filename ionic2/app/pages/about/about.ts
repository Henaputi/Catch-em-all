import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { people } from './about-people';

@Component({
  templateUrl: 'pages/about/about.html',
})
export class AboutPage {
  profs=people.profs
  mentors=people.mentors
  teamA=people.teamA
  teamB=people.teamB
  teamC=people.teamC
  teamD=people.teamD
  teamE=people.teamE

  constructor(private navCtrl: NavController) {

  }
}
