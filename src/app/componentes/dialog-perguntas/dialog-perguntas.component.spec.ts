import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPerguntasComponent } from './dialog-perguntas.component';

describe('DialogPerguntasComponent', () => {
  let component: DialogPerguntasComponent;
  let fixture: ComponentFixture<DialogPerguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogPerguntasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
