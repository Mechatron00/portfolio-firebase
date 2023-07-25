import { Component } from '@angular/core';
import {faGithub,faLinkedinIn, faInstagram, faBehance, faBehanceSquare} from "@fortawesome/free-brands-svg-icons";
import {faExternalLink,faPhone,faEnvelope, faGlobe, faBars,} from "@fortawesome/free-solid-svg-icons";
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent 
{
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faWebsite = faExternalLink;
  faPhone = faPhone;
  faEmail = faEnvelope;
  faGlobe = faGlobe;
  faInstagram = faInstagram;
  faBehance =faBehance;
  faBehanceBoxed = faBehanceSquare;
  color: ThemePalette;
  faEnvelope = faEnvelope;
  faBars = faBars;


  availableColors: ChipColor[] = [
    {name: 'Java', color: 'primary'},
    {name: 'Angular', color: 'accent'},
    {name: 'Hibernate', color: 'warn'},
    {name: 'Springboot', color: 'primary'},
    {name: 'HTML', color: 'accent'},
    {name: 'CSS', color: 'warn'},
    {name: 'JavaScript', color: 'primary'},
    {name: 'Angular Material', color: 'accent'},
  ];

}
export interface ChipColor {
  name: string;
  color: ThemePalette;

}
