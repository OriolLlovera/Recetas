import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasRecetasComponent } from './nuevasrecetas.component';

describe('OffersComponent', () => {
  let component: NuevasRecetasComponent;
  let fixture: ComponentFixture<NuevasRecetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevasRecetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevasRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
