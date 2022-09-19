import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemCreateComponent } from './personagem-create.component';

describe('PersonagemCreateComponent', () => {
  let component: PersonagemCreateComponent;
  let fixture: ComponentFixture<PersonagemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagemCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
