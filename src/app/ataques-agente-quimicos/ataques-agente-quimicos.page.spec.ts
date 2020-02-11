import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtaquesAgenteQuimicosPage } from './ataques-agente-quimicos.page';

describe('AtaquesAgenteQuimicosPage', () => {
  let component: AtaquesAgenteQuimicosPage;
  let fixture: ComponentFixture<AtaquesAgenteQuimicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtaquesAgenteQuimicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtaquesAgenteQuimicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
