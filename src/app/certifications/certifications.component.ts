import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent 
{
  allImages = [
    'AbgularCLI',
    'Angular',
    'AngularEssential',
    'angularFullsatck',
    'AngularMaintenance',
    'AngularTestingAndDebugging',
    'bitdegree',
    'CssEssential',
    'ES6',
    'firebase',
    'FullStackJava',
    'HtmlEssential',
    'Java8Professional',
    'Javascript2019',
    'JavascriptClasses',
    'JavascriptClosures',
    'JavascriptEssential',
    'JAvascriptLanguage',
    'JavascriptPrototypes',
    'JavascriptScope',
    'ReactiveAngular',
    'SDLC',
    'VanillaJavascript',
    'WebsocketAngular'

  ]

  images = this.allImages.map((n) => `../../assets/certificates/${n}.jpg`);
  //   images = ["../../assets/certificates/bitdegree-certificate-1192195 (4).jpeg",
  //   "../../assets/DSC07808.JPG"
  
  // ]
    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;
    pauseOnFocus = true;
  
    @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;
  
    togglePaused() {
      if (this.paused) {
        this.carousel.cycle();
      } else {
        this.carousel.pause();
      }
      this.paused = !this.paused;
    }
  
    onSlide(slideEvent: NgbSlideEvent) {
      if (
        this.unpauseOnArrow &&
        slideEvent.paused &&
        (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
      ) {
        this.togglePaused();
      }
      if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
        this.togglePaused();
      }
    }
  
    allLinks =[
      'https://www.linkedin.com/learning/certificates/9f2c42585ee38e67877cb9ddb07ef94e67e1b1d3e4a11d0cc23e7a4089768498',
      'https://www.linkedin.com/learning/certificates/7101fa0199263f20d2a55782b79ccf05f05c2e8d8422ed3303b28f6a1a53b442',
      'https://www.linkedin.com/learning/certificates/224db2d78afbbfabf1524cf77d7b47a3d228c18e391f430f47852444369a7913',
      'https://www.linkedin.com/learning/certificates/7ba8527ff780e5e0307a150494cca84672fc844258de77f6c5fa7b261019cc87',
      'https://www.linkedin.com/learning/certificates/8e80873c4514ddb3e8717ac8e5edb35a47662bbd36c476065598973ea6213fef',
      'https://www.linkedin.com/learning/certificates/b51f9bfb32c1b11f8ad0634fc71b71b3a39fec264cdc21552ab0ee36282c4969',
      '#!',//bitdegree
      'https://www.linkedin.com/learning/certificates/cf83176ad14aff504fc9a6efd65acff5d2afc7d138af9a42bfd9eec00bba40b1',
      'https://www.linkedin.com/learning/certificates/c65bfde7f4d939aae77fc3a059f19266b6dcf5416d583364bfddb2d782d8554a',
      'https://www.linkedin.com/learning/certificates/7d324fbfd0133a9b93ea781322a17f0ea6796a3984d4d074291e02ce7b28d73b',
      '#!',//fullstack
      'https://www.linkedin.com/learning/certificates/3bfbe50c63b574a0025728631c03f206f218488d2fa5e368e566ab4b7864e8f3',
      'https://www.linkedin.com/learning/certificates/6c677072e3c67ae3bbb6c84090490770172d102f21c780e82311b56f99ba0a52',
      'https://www.linkedin.com/learning/certificates/9ae4de31d1eea4f3df2902f43cfc65a952b1f56f6642b994f17e2d1735c5bbad',
      'https://www.linkedin.com/learning/certificates/1d8fccd05ce16452a430241c2b3171091b645796eb78154fd0b0ed1e2d7c02c2',
      'https://www.linkedin.com/learning/certificates/4f15df2805614b02b883b6d672796bd5b613eb320884bbbc4aa327289c4a10a0',
      'https://www.linkedin.com/learning/certificates/1ef2b2035611ff28d6adb296ba856f17d337d5174a40ce2ed1eb0686640307d5',
      'https://www.linkedin.com/learning/certificates/9ae4de31d1eea4f3df2902f43cfc65a952b1f56f6642b994f17e2d1735c5bbad',
      'https://www.linkedin.com/learning/certificates/42e513339f6b8d203067199c3f37dbcee7bcc6a261f4e4fff328497eda7356e6',
      'https://www.linkedin.com/learning/certificates/ff5703ba866ef521f154136fa60e5cc2e3d28a77b5ba8ecf6e19b42f2d7adf56',
      'https://www.linkedin.com/learning/certificates/2ee0123c3bd922855f070eb988fef70e88118c9aad3275855763b93c40cf951e',
      'https://www.linkedin.com/learning/certificates/726c1daf5de0eaff6a379e20cb8385e0ad22ca8289c82ad92d9537f3205fca46',
      'https://www.linkedin.com/learning/certificates/2a1bb671494d9043cdd6a989a50098ebeb4066eac24b266ee48973c9c7e42d44',
      'https://www.linkedin.com/learning/certificates/f0fd19b86fa3165f0b69a6dd4c8ab5baec61970199fb21d0a3144043a80522fa',
  
  
    ]
  
}
