import { Component, OnInit } from '@angular/core';
import { ThemeService } from './service/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'untitled';

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.setTheme();
  }

  private setTheme(): void {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setDarkTheme();
    } else {
      this.themeService.setLightTheme();
    }
  }

  private toggleTheme(): void {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }
}
