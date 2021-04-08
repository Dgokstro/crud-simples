import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasEditComponent } from './vendas-edit.component';

describe('VendasEditComponent', () => {
  let component: VendasEditComponent;
  let fixture: ComponentFixture<VendasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendasEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
