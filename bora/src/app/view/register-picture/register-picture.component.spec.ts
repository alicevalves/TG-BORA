import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPictureComponent } from './register-picture.component';

describe('RegisterPictureComponent', () => {
  let component: RegisterPictureComponent;
  let fixture: ComponentFixture<RegisterPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
