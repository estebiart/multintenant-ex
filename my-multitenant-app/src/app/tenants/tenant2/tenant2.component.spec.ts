import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tenant2Component } from './tenant2.component';

describe('Tenant2Component', () => {
  let component: Tenant2Component;
  let fixture: ComponentFixture<Tenant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tenant2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tenant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
