import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponents } from './tasks.component';

describe('TaskComponent', () => {
  let component: TaskComponents;
  let fixture: ComponentFixture<TaskComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskComponents]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
