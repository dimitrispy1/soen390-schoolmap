import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToggleComponent } from './toggle.component';
import {MapComponent} from '../map/map.component';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleComponent, MapComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [IonicModule.forRoot(), NgModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
