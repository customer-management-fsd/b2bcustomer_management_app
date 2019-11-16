import { Component, OnInit } from '@angular/core';
import {ExcelService} from '../services/excel.service';
import { CustomersServices } from '../services/customers-services.service';
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit{

   /*dtOptions = {};
   customers: any = [];
   dtTrigger: Subject<any> = new Subject();
   constructor(private custom: CustomersServicesService) {
   }
     ngOnInit(): void {
      this.dtOptions = {
        dom: 'BfrTrip',
        // Configure the buttons
        buttons: [
          'colvis',
          'copy',
          'print',
          'excel',
          'pdf'
        ]
      };
      // tslint:disable-next-line: deprecation
      this.custom.getCustomers().subscribe(arr => {
      this.customers = arr;
      });
      //.add(() => this.dtTrigger.next());
   }
   /*ngOnDestroy() {
     this.dtTrigger.unsubscribe();
   }*/
  /*constructor(private custom: CustomersServicesService) {
  }*/
  customers: any = [];
  data: any = [];
  ngOnInit() {
    this.custom.getCustomers().subscribe(arr => {
      this.customers = arr;
      this.data = this.customers;
      });
  }
 constructor(private excelService: ExcelService , private custom: CustomersServices) {
}
exportAsXLSX(): void {
   this.excelService.exportAsExcelFile(this.data, 'sample');
}
 }

