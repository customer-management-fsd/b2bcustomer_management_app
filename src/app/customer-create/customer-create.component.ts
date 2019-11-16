import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GenericValidator } from '../validator/generic-validator';
import { CustomersServices } from '../services/customers-services.service';
import { ICustomer } from '../modal/customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit, AfterViewInit {


  constructor(private fb: FormBuilder,
              private router: Router,
              private customerService: CustomersServices) {

  // Defines all of the validation messages for the form.
  // These could instead be retrieved from a file or database.
  this.validationMessages = {
  customerFirstName: {
  required: 'Customer name is required.',
  minlength: 'Customer name must be at least three characters.',
  maxlength: 'Customer name cannot exceed 50 characters.'
  },
  customerId: {
  required: 'Customer id is required.'
  },
  customerLastName: {
    required: 'Customer name is required.',
    maxlength: 'Customer name cannot exceed 50 characters.'
    },
    longitude: {
      required: 'Longitude is required.'
    },
    latitude: {
        required: 'Latitude is required.'
      },
      state: {
        required: 'state name is required.'
        },
        country: {
          required: 'Country name is required.'
          }

  };

  // Define an instance of the validator for use with this form,
  // passing in this form's set of validation messages.
  this.genericValidator = new GenericValidator(this.validationMessages);
  }


  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  pageTitle = ' Add New Customer';
  errorMessage: string;
  customerform: FormGroup;
  customer: ICustomer;
  private sub: Subscription;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;


  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements
  .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

  // tslint:disable-next-line: align
  merge(this.customerform.valueChanges, ...controlBlurs).pipe(
  debounceTime(800)
  ).subscribe(value => {
  this.displayMessage = this.genericValidator.processMessages(this.customerform);
  });
  }

  ngOnInit(): void {
  this.customerform = this.fb.group({
  customerFirstName: ['', [Validators.required,
  Validators.minLength(3),
  Validators.maxLength(50)]],

  customerId: ['', Validators.required],
  customerLastName: ['', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50)]],
    latitude:  ['', [Validators.required]],
    longitude: ['', [Validators.required]],
    state: ['', [Validators.required]],
    country: ['', [Validators.required]],
    orders: [[]]
 });
}


onSaveComplete() {
    this.customerform.reset();
    this.router.navigate(['customers']);
  }


  saveCustomer(): void {
    const c = { ...this.customer, ...this.customerform.value };
    console.log(c);
    this.customerService.createCustomer(c)
    .subscribe({
    next: () => this.onSaveComplete(),
    error: err => this.errorMessage = 'customer id already exists'
    });
    }

}
