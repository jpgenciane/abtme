import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDialogComponent } from './cash-dialog.component';

describe('CashDialogComponent', () => {
  let component: CashDialogComponent;
  let fixture: ComponentFixture<CashDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
