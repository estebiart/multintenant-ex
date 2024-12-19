import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tenant1Component } from './tenant1.component';

describe('Tenant1Component', () => {
  let component: Tenant1Component;
  let fixture: ComponentFixture<Tenant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tenant1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tenant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
