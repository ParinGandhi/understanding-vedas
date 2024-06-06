import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigVedaComponent } from './rig-veda.component';

describe('RigVedaComponent', () => {
  let component: RigVedaComponent;
  let fixture: ComponentFixture<RigVedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigVedaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RigVedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
