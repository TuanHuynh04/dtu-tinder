import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionBoxComponent } from './reaction-box.component';

describe('ReactionBoxComponent', () => {
  let component: ReactionBoxComponent;
  let fixture: ComponentFixture<ReactionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
