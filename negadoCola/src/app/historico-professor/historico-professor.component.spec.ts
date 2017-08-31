import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoProfessorComponent } from './historico-professor.component';

describe('HistoricoProfessorComponent', () => {
  let component: HistoricoProfessorComponent;
  let fixture: ComponentFixture<HistoricoProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
