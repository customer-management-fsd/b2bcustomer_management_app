import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ICustomer } from '../modal/customer';
import { GenericValidator } from '../validator/generic-validator';
import { CustomersServices } from '../services/customers-services.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  validationMessages: { customerFirstName: { required: string; minlength: string; maxlength: string; };
  customerId: { required: string; }; customerLastName: { required: string; maxlength: string; }; };
  genericValidator: GenericValidator;

  constructor(private fb: FormBuilder,
              private router: Router,
              private customerService: CustomersServices) {
}

@ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  pageTitle = ' Add New Customer';
  errorMessage: string;
  customerform: FormGroup;
  customer: ICustomer;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};


  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements
  .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

  // tslint:disable-next-line: align
  merge(this.customerform.valueChanges, ...controlBlurs).pipe(
  debounceTime(800)
  ).subscribe(() => {
  this.displayMessage = this.genericValidator.processMessages(this.customerform);
  });
  }

  ngOnInit(): void {
  this.customerform = this.fb.group({
  customerFirstName: ['', [Validators.required,
  Validators.minLength(3),
  Validators.maxLength(50)]],

  customerId: [0, Validators.required],
  customerLastName: ['', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50)]],
    doorNo:  ['', [Validators.required]],
    streetName: ['', [Validators.required]],
    city: ['', [Validators.required]],
    pincode: [0, [Validators.required]],
    state: ['', [Validators.required]],
    country: ['', [Validators.required]]
 });
}


onSaveComplete() {
    this.customerform.reset();
    this.router.navigate(['customers']);
  }


  saveCustomer(): void {
    if (this.customerform.valid) {
    if (this.customerform.dirty) {
    const c = { ...this.customer, ...this.customerform.value };

    console.log(c);
    this.customerService.updateCustomer(c)
    .subscribe({
    next: () => this.onSaveComplete(),
    error: err => this.errorMessage = err
    });

    }
    }
    }
}


