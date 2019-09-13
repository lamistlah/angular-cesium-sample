import {
  AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DraggableToMapService, MapsManagerService } from 'angular-cesium';
import { ThemeService } from '../../service/theme.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-cesium-sample';

  isDarkTheme: Observable<boolean>;

  @ViewChild('mainMap', { static: false }) mainMap: MapComponent;

  constructor(
      private themeService: ThemeService,
      private overlayContainer: OverlayContainer,
      private mapsManagerService: MapsManagerService,
      private draggableToMapService: DraggableToMapService,
  ) {
  }

  ngOnInit(): void {
    // this.setTheme();
    this.isDarkTheme = this.themeService.getDarkThemeDynamic();
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
    this.setTheme();
  }

  toggleDarkTheme(checked: boolean): void {
    this.themeService.setDarkThemeDynamic(checked);
    const effectiveTheme = checked ? 'app-dark-theme' : 'app-default-theme';
    const { classList } = this.overlayContainer.getContainerElement();
    const toRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(effectiveTheme);
  }

  ngAfterViewInit(): void {
    // example for getting the viewer by Id outside of the ac-map hierarchy
    this.mapsManagerService.getMap('main-map');
    this.draggableToMapService.dragUpdates().subscribe((e) => console.log(e));
  }
}