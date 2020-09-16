import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterSearchPipe } from 'src/app/pipes/filter-search.pipe';
import { APIListDataService } from 'src/app/services/api-list-data.service';

import { ListDataComponent } from './list-data.component';

describe('ListDataComponent', () => {
  let component: ListDataComponent;
  let fixture: ComponentFixture<ListDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule,],
      declarations: [ ListDataComponent, FilterSearchPipe ],
      providers:[APIListDataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get data', () => {
    const service: APIListDataService = TestBed.get(APIListDataService);
    service.getData().subscribe(
      (Data) => {
        expect(Data[0].author).toEqual('Ryan Dahl');
      }
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
