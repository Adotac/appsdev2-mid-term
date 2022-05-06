import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OperationComponent } from './operation.component';

describe('OperationComponent', () => {
  let component: OperationComponent;
  let fixture: ComponentFixture<OperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Operation-Component', () => {
    expect(component).toBeTruthy();
  });

  it('should click `Add` button and call onButtonClick() to change operation value(1)', (done) => {
    let btn:HTMLElement = fixture.debugElement.query(By.css('#addBtn')).nativeElement;
    let spy = spyOn(component, 'onButtonClick').and.callThrough();

    component.operation.subscribe((response) => {
      expect(response).toBe(1);
      done();
    });
    btn.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
  it('should click `Subtract` button and call onButtonClick() to change operation value(2)', (done) => {
    let btn:HTMLElement = fixture.debugElement.query(By.css('#subBtn')).nativeElement;
    let spy = spyOn(component, 'onButtonClick').and.callThrough();

    component.operation.subscribe((response) => {
      expect(response).toBe(2);
      done();
    });
    btn.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
  it('should click `Divide` button and call onButtonClick() to change operation value(3)', (done) => {
    let btn:HTMLElement = fixture.debugElement.query(By.css('#mulBtn')).nativeElement;
    let spy = spyOn(component, 'onButtonClick').and.callThrough();

    component.operation.subscribe((response) => {
      expect(response).toBe(3);
      done();
    });
    btn.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
  it('should click `Multiply` button and call onButtonClick() to change operation value(4)', (done) => {
    let btn:HTMLElement = fixture.debugElement.query(By.css('#divBtn')).nativeElement;
    let spy = spyOn(component, 'onButtonClick').and.callThrough();

    component.operation.subscribe((response) => {
      expect(response).toBe(4);
      done();
    });
    btn.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
