import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvisoComponent } from './dialog-aviso.component';

describe('DialogAvisoComponent', () => {
  let component: DialogAvisoComponent;
  let fixture: ComponentFixture<DialogAvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAvisoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
