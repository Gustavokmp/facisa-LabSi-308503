import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraTurmaComponent } from './cadastra-turma.component';

describe('CadastraTurmaComponent', () => {
  let component: CadastraTurmaComponent;
  let fixture: ComponentFixture<CadastraTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
