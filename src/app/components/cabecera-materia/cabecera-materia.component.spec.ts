import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraMateriaComponent } from './cabecera-materia.component';

describe('CabeceraMateriaComponent', () => {
  let component: CabeceraMateriaComponent;
  let fixture: ComponentFixture<CabeceraMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraMateriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
