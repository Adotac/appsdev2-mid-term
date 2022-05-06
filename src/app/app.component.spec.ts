import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('Montero, Joshua - Midterms Unit Testing', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call receiveFromInput() when first number field is inputted', () => {
    let spy = spyOn(component, 'receiveFromInput').and.callThrough();
    let input = fixture.debugElement.query(By.css('#numInput')).nativeElement;
    input.value = 69;

    input.dispatchEvent(new Event('firstNumber'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
  it('should call receiveFromInput() when second number field is inputted', () => {
    let spy = spyOn(component, 'receiveFromInput').and.callThrough();
    let input = fixture.debugElement.query(By.css('#numInput')).nativeElement;
    input.value = 69;
    
    input.dispatchEvent(new Event('secondNumber'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should call receiveOperation() when operation is selected', () => {
    let spy = spyOn(component, 'receiveOperation').and.callThrough();
    let input = fixture.debugElement.query(By.css('#recOper')).nativeElement;
    input.value = 1;
    
    input.dispatchEvent(new Event('operation'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should check if app-result will not display when there are no both inputs', () => {
    let ngif = fixture.debugElement.query(By.css('#resultIF'));
    expect(ngif).toBeNull();
  });
  it('should check if app-result will display when there are both inputs and selected operation', () => {  
    component.firstNumber = 0;
    component.secondNumber = 0;
    component.operation = true;

    fixture.detectChanges();
    let ngif = fixture.debugElement.query(By.css('#resultIF'));
    expect(ngif).not.toBeNull();
  });

  it('should change firstNumber value after calling receiveFromInput()', () => {  
    let spy = spyOn(component, 'receiveFromInput').and.callThrough();
    component.receiveFromInput({value:69, which:0});

    fixture.detectChanges();
    expect(component.firstNumber).toBe(69);
    expect(spy).toHaveBeenCalled();
  });
  it('should change secondNumber value after calling receiveFromInput()', () => {  
    let spy = spyOn(component, 'receiveFromInput').and.callThrough();
    component.receiveFromInput({value:69, which:1});

    fixture.detectChanges();
    expect(component.secondNumber).toBe(69);
    expect(spy).toHaveBeenCalled();
  });
  it('should change selectedOperation value after calling receiveOperation()', () => {  
    let spy = spyOn(component, 'receiveOperation').and.callThrough();
    component.receiveOperation(1);

    fixture.detectChanges();
    expect(component.selectedOperation).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
  it('should change operation value to `true` after calling receiveOperation()', () => {  
    let spy = spyOn(component, 'receiveOperation').and.callThrough();
    component.receiveOperation(1);

    fixture.detectChanges();
    expect(component.operation).toBeTrue();
    expect(spy).toHaveBeenCalled();
  });

  it('should call sendValue() after calling receiveOperation()', () => {  
    let spyOp = spyOn(component, 'receiveOperation').and.callThrough();
    let spySend = spyOn(component, 'sendValue').and.callThrough();

    component.receiveOperation(1);

    fixture.detectChanges();
    expect(spyOp).toHaveBeenCalled();
    expect(spySend).toHaveBeenCalled();
    expect(component.count).toBe(1);
  });

});
