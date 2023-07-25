import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {faGithub,faLinkedinIn, faInstagram, faBehance, faBehanceSquare} from "@fortawesome/free-brands-svg-icons";
import {faExternalLink,faPhone,faEnvelope, faGlobe, faBars,} from "@fortawesome/free-solid-svg-icons";
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  private breakpointObserver = inject(BreakpointObserver);
  color: ThemePalette;
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faWebsite = faExternalLink;
  faPhone = faPhone;
  faEmail = faEnvelope;
  faGlobe = faGlobe;
  faInstagram = faInstagram;
  faBehance =faBehance;
  faBehanceBoxed = faBehanceSquare;
  faEnvelope = faEnvelope;
  faBars = faBars;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
