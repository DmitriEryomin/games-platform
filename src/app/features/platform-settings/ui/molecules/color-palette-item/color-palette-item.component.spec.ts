import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteItemComponent } from './color-palette-item.component';

describe('ColorPaletteItemComponent', () => {
  let component: ColorPaletteItemComponent;
  let fixture: ComponentFixture<ColorPaletteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPaletteItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorPaletteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
