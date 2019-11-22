import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ICustomer } from '../modal/customer';
import { GenericValidator } from '../validator/generic-validator';
import { CustomersServices} from '..//services/customers-services.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  validationMessages: {
    customerFirstName: { required: string; minlength: string; maxlength: string; };
   customerLastName: { required: string; maxlength: string; };
   latitude: { required: string; };
   longitude: { required: string; };
   country: { required: string; };
   state: { required: string; };
  };
  genericValidator: GenericValidator;
  sub: any;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private customerService: CustomersServices) {

                this.validationMessages = {
                  customerFirstName: {
                  required: 'Customer name is required.',
                  minlength: 'Customer name must be at least three characters.',
                  maxlength: 'Customer name cannot exceed 50 characters.'
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

                this.genericValidator = new GenericValidator(this.validationMessages);
}

@ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  pageTitle = ' Edit Customer';
  errorMessage: string;
  customerform: FormGroup;
  customer: ICustomer;


  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};

  ngOnInit(): void {
    this.customerform = this.fb.group({
    customerFirstName: ['', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50)]],
    customerId: [0, Validators.required],
    customerLastName: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      latitude:  ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      imageUrl: [''],
      orders: [[]]
   });

   // tslint:disable-next-line: align
   this.sub = this.route.paramMap.subscribe(
     params => {
       const id = +params.get('id');
       // tslint:disable-next-line: no-trailing-whitespace
       this.getCustomer(id);
     }
   );
  }


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


onSaveComplete() {
    this.customerform.reset();
    this.router.navigate(['customers']);
  }

  getCustomer(id: number): void {
    this.customerService.getCustomerById(id)
    .subscribe({
    next: (customer: ICustomer) => {
      console.log(customer);
      this.displayCustomer(customer);
  },
    error: err => this.errorMessage = err
    });
    }

    displayCustomer(customer: ICustomer): void {
    if (this.customerform) {
    this.customerform.reset();
    }

    console.log(customer);
    this.customerform.patchValue({
        customerId: customer.customerId,
        customerFirstName: customer.customerFirstName,
        customerLastName: customer.customerLastName,
        latitude: customer.latitude,
        longitude: customer.longitude,
        state: customer.state,
        country: customer.country,
        imageUrl: customer.imageUrl,
        orders: customer.orders

    });
    }


  saveCustomer(): void {
    if (this.customerform.valid) {
    if (this.customerform.dirty) {
    const c = { ...this.customer, ...this.customerform.value };

    this.customerService.updateCustomer(c)
    .subscribe({
    next: () => this.onSaveComplete(),
    error: err => this.errorMessage = err
    });

    }
    }
    }
    // tslint:disable-next-line: align
    // tslint:disable-next-line: member-ordering


}
