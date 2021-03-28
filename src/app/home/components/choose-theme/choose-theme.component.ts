import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-theme',
  templateUrl: './choose-theme.component.html',
  styleUrls: ['./choose-theme.component.scss'],
})
export class ChooseThemeComponent implements OnInit {
  darkModeActivated = false;
  selectStyle = false;
  constructor() {
    this.darkModeActivated =
      localStorage.getItem('darkModeActivated') == 'true';
  }

  ngOnInit(): void {
    this.chooseTheme();
  }

  onSelectStyle() {
    this.selectStyle = !this.selectStyle;
  }

  themeToogle(theme) {
    if (theme == 'dark') {
      this.darkModeActivated = true;
    } else {
      this.darkModeActivated = false;
    }
    localStorage.setItem(
      'darkModeActivated',
      this.darkModeActivated ? 'true' : 'false'
    );
    this.chooseTheme();
    this.onSelectStyle();
  }

  chooseTheme() {
    if (this.darkModeActivated) {
      document.body.className = 'mat-typography darkThemeClass';
    } else {
      document.body.className = 'mat-typography lightThemeClass';
    }
  }
}
