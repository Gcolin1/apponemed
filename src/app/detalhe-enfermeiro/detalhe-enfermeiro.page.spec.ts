import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalheEnfermeiroPage } from './detalhe-enfermeiro.page';

describe('DetalheEnfermeiroPage', () => {
  let component: DetalheEnfermeiroPage;
  let fixture: ComponentFixture<DetalheEnfermeiroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheEnfermeiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheEnfermeiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
