import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlunoComponent } from './menu-aluno.component';

describe('MenuAlunoComponent', () => {
  let component: MenuAlunoComponent;
  let fixture: ComponentFixture<MenuAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
