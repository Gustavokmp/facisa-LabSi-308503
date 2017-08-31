import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarProvaComponent } from './realizar-prova.component';

describe('RealizarProvaComponent', () => {
  let component: RealizarProvaComponent;
  let fixture: ComponentFixture<RealizarProvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarProvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
