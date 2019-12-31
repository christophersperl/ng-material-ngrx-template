import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SorterComponent } from './sorter.component';

describe('SorterComponent', () => {
  let component: SorterComponent;
  let fixture: ComponentFixture<SorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorterComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
