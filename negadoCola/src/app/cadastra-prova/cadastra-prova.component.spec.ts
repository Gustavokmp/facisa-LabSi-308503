import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraProvaComponent } from './cadastra-prova.component';

describe('CadastraProvaComponent', () => {
  let component: CadastraProvaComponent;
  let fixture: ComponentFixture<CadastraProvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraProvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
