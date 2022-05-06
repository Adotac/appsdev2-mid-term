import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;

    component.receive = 1;
    fixture.detectChanges();
  });

  it('should create Result-Component', () => {
    expect(component).toBeTruthy();
  });

  it('should change `result` when compute() is called with `add` operation(1)', () => {
    let spy = spyOn(component, 'compute').and.callThrough();
    component.receive = {first: 6, second: 9, op: 1};

    component.compute();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.result).toBe(15);
  });
  it('should change `result` when compute() is called with `subtract` operation(2)', () => {
    let spy = spyOn(component, 'compute').and.callThrough();
    component.receive = {first: 6, second: 9, op: 2};

    component.compute();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.result).toBe(-3);
  });
  it('should change `result` when compute() is called with `divide` operation(3)', () => {
    let spy = spyOn(component, 'compute').and.callThrough();
    component.receive = {first: 6, second: 2, op: 3};

    component.compute();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.result).toBe(3);
  });
  it('should change `result` when compute() is called with `multiply` operation(4)', () => {
    let spy = spyOn(component, 'compute').and.callThrough();
    component.receive = {first: 6, second: 9, op: 4};

    component.compute();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.result).toBe(54);
  });

  it('should change `result-header` element textContent with ngOnChanges()', () => {
    let res:HTMLElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    let spy = spyOn(component, 'compute').and.callThrough();
    component.receive = {first: 6, second: 9, op: 4};

    component.ngOnChanges();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.result).toBe(54);
    expect(res.textContent).toBe('54');
  });
});
