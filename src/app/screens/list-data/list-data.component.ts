import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListData } from 'src/app/list-data';
import { FilterSearchPipe } from 'src/app/pipes/filter-search.pipe';
import { APIListDataService } from 'src/app/services/api-list-data.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {

  listData : ListData[];
  FilterDataName : string = "";
  FilterDataType : string = "";

  OrderNameAsc : boolean = true;
  OrderLanguageAsc : boolean = null;
  CountRows: number = 0;

  constructor(
    private APIListDataService: APIListDataService,
    private mRouter : Router
    ) { }

  ngOnInit(): void {
    const AuthUser = localStorage.getItem("Auth-Sesion");
    if(AuthUser == null){
      this.mRouter.navigate(['/'])
    }
    this.APIListDataService.getData()
    .subscribe((Response: any) => {
      this.listData = Response;
      this.ChangeText(); 
    });
  }


  ChangeText() {
    const filterPipe = new FilterSearchPipe();
    this.CountRows = filterPipe.transform(this.listData,
      this.FilterDataName ,
      this.FilterDataType ,
      this.OrderNameAsc ,
      this.OrderLanguageAsc, true);
  }

}
