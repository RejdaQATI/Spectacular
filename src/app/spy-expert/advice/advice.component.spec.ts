import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Advice } from '../core/models/advice';
import { AdviceComponent } from './advice.component';
import { DebugElement } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('AdviceComponent', () => {
  let component: AdviceComponent;
  let fixture: ComponentFixture<AdviceComponent>;
  let debugEl: DebugElement;
  let expectedAdvice: Advice = { slip: { id: 2, advice: 'fake advice' } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviceComponent], 
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AdviceComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
  });

  it('should display the advice', async () => {
    fixture.componentRef.setInput('advice', expectedAdvice); 
    fixture.detectChanges(); 
    await fixture.whenStable(); 

    const adviceText = debugEl.nativeElement.querySelector('.quote')?.textContent.trim();
    expect(adviceText).toContain('fake advice'); 
  });

  // Use spy
  it('should redirect to the hate page', () => {
    // const router = TestBed.inject(Router);
    // spyOn(router, 'navigate'); 

    // fixture.componentRef.setInput('advice', expectedAdvice); 
    // fixture.detectChanges();

    // component.hateAdvice(); 

    // expect(router.navigate).toHaveBeenCalledWith(['/hate', 2]); 
  });
});
