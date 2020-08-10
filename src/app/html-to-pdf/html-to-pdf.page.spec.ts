import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HtmlToPdfPage } from './html-to-pdf.page';

describe('HtmlToPdfPage', () => {
  let component: HtmlToPdfPage;
  let fixture: ComponentFixture<HtmlToPdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlToPdfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlToPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
