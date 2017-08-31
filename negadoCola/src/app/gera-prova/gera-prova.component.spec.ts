import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeraProvaComponent } from './gera-prova.component';

describe('GeraProvaComponent', () => {
  let component: GeraProvaComponent;
  let fixture: ComponentFixture<GeraProvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeraProvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeraProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
