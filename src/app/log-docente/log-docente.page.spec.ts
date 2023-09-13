import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogDocentePage } from './log-docente.page';

describe('LogDocentePage', () => {
  let component: LogDocentePage;
  let fixture: ComponentFixture<LogDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
