import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NumberInputComponent } from './number-input.component';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Number-Input-Component', () => {
    expect(component).toBeTruthy();
  });

  it('Check for `First number` label', () => {
    let label: HTMLElement = fixture.debugElement.query(By.css('#firstlabel')).nativeElement;
    expect(label.textContent).toBe("First Number");
  });
  it('Check for `Second number` label', () => {
    let label: HTMLElement = fixture.debugElement.query(By.css('#secondlabel')).nativeElement;
    expect(label.textContent).toBe("Second Number");
  });

  it('should change `firstNumber` when numberInput() is called', (done) => {
    component.firstNumber.subscribe((response) => {
      expect(response).toEqual({value: 6, which: 0});
      done();
    });
    component.numberInput("6", 0);
  });
  it('should change `secondNumber` when numberInput() is called', (done) => {
    component.secondNumber.subscribe((response) => {
      expect(response).toEqual({value: 9, which: 1});
      done();
    });
    component.numberInput("9", 1);
  });

  it('should call numberInput() when first number field is inputted', (done) => {
    let spy = spyOn(component, 'numberInput').and.callThrough();
    let input = fixture.debugElement.query(By.css('#firstInput')).nativeElement;
    input.value = '6';

    component.firstNumber.subscribe((response) => {
      expect(response).toEqual({value: 6, which: 0});
      done();
    });

    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
  it('should call numberInput() when second number field is inputted', (done) => {
    let spy = spyOn(component, 'numberInput').and.callThrough();
    let input = fixture.debugElement.query(By.css('#secondInput')).nativeElement;
    input.value = '9';

    component.secondNumber.subscribe((response) => {
      expect(response).toEqual({value: 9, which: 1});
      done();
    });

    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });



  
});
