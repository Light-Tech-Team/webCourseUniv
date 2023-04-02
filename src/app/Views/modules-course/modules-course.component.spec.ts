import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesCourseComponent } from './modules-course.component';

describe('ModulesCourseComponent', () => {
  let component: ModulesCourseComponent;
  let fixture: ComponentFixture<ModulesCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
