import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPersonaComponent } from './cabecera-persona.component';

describe('CabeceraPersonaComponent', () => {
  let component: CabeceraPersonaComponent;
  let fixture: ComponentFixture<CabeceraPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
