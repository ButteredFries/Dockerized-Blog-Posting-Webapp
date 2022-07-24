import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTabsModuleComponent } from './mat-tabs-module.component';

describe('MatTabsModuleComponent', () => {
  let component: MatTabsModuleComponent;
  let fixture: ComponentFixture<MatTabsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTabsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTabsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
