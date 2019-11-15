import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamGraphComponent } from './stream-graph.component';

describe('StreamGraphComponent', () => {
  let component: StreamGraphComponent;
  let fixture: ComponentFixture<StreamGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
