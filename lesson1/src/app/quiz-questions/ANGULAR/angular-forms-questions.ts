export const ANGULAR_FORMS_QUESTIONS = [
  { id: 1, question: 'What module must be imported to use Template Driven Forms in Angular?', options: ['ReactiveFormsModule', 'FormsModule', 'HttpClientModule', 'CommonModule'], answer: 'FormsModule' },
  { id: 2, question: 'Which directive is used to bind form inputs to component properties in Template Driven Forms?', options: ['ngModel', 'formControlName', 'formGroup', 'ngForm'], answer: 'ngModel' },
  { id: 3, question: 'In Template Driven Forms, how can you reference the form object in the component?', options: ['Using ViewChild', 'By adding a local reference variable in the HTML', 'Using a service', 'By passing formGroup as a parameter'], answer: 'By adding a local reference variable in the HTML' },
  { id: 4, question: 'Which Angular class is used to create reactive forms?', options: ['FormControl', 'FormArray', 'FormGroup', 'NgForm'], answer: 'FormGroup' },
  { id: 5, question: 'How do you initialize a FormControl with a default value in Reactive Forms?', options: ['new FormControl("defaultValue")', 'new FormControl(null, Validators.required)', 'new FormControl("defaultValue", Validators.required)', 'new FormControl()'], answer: 'new FormControl("defaultValue")' },
  { id: 6, question: 'What is the purpose of the `ngSubmit` event in Angular forms?', options: ['To bind form inputs to component properties', 'To handle form submission', 'To initialize form controls', 'To add form validation'], answer: 'To handle form submission' },
  { id: 7, question: 'In Reactive Forms, how can you validate a form control for required input?', options: ['Adding Validators.required to the FormControl', 'Using the required attribute in HTML', 'Adding a required class to the input', 'Using the ngModel directive'], answer: 'Adding Validators.required to the FormControl' },
  { id: 8, question: 'Which directive is used to bind a FormGroup to a form element in Reactive Forms?', options: ['formControlName', 'ngModel', 'formGroup', 'ngForm'], answer: 'formGroup' },
  { id: 9, question: 'How can you display validation error messages conditionally in Angular forms?', options: ['Using *ngIf with form control validity', 'By setting CSS classes on form elements', 'Using the ngModel directive', 'By manipulating the DOM directly'], answer: 'Using *ngIf with form control validity' },
  { id: 10, question: 'Which method should be used to reset a Template Driven Form?', options: ['formObj.reset()', 'this.reactiveForm.reset()', 'this.form.reset()', 'this.formGroup.reset()'], answer: 'formObj.reset()' },
  { id: 11, question: 'How can you prepopulate a form control with default data in Reactive Forms?', options: ['Setting the default value in FormControl', 'Using ngModel with default value', 'Adding default data in HTML template', 'Manually setting the value in the component class'], answer: 'Setting the default value in FormControl' },
  { id: 12, question: 'What is the purpose of the `ngModelGroup` directive in Angular forms?', options: ['To group form controls', 'To define form validation', 'To bind form values', 'To specify a form control'], answer: 'To group form controls' },
  { id: 13, question: 'Which class allows the usage of asynchronous validation in Angular forms?', options: ['Validators', 'FormControl', 'AsyncValidatorFn', 'FormGroup'], answer: 'AsyncValidatorFn' },
  { id: 14, question: 'How can you bind a select element’s value to a component property in Template Driven Forms?', options: ['Using ngModel', 'Using formControlName', 'By setting the value attribute in HTML', 'Using FormArray'], answer: 'Using ngModel' },
  { id: 15, question: 'What Angular directive should be used to create a form control with multiple input elements?', options: ['ngModelGroup', 'formArrayName', 'formGroup', 'formControlName'], answer: 'formArrayName' },
  { id: 16, question: 'What is the default validation behavior for form controls in Reactive Forms if no validators are specified?', options: ['Valid', 'Invalid', 'Pending', 'Disabled'], answer: 'Valid' },
  { id: 17, question: 'Which lifecycle hook is called after Angular initializes the form controls in Reactive Forms?', options: ['ngOnInit', 'ngAfterViewInit', 'ngAfterContentInit', 'ngOnChanges'], answer: 'ngOnInit' },
  { id: 18, question: 'In Reactive Forms, how can you group multiple controls into a FormGroup?', options: ['By creating a new FormGroup with controls', 'Using a FormArray', 'By defining nested FormControls', 'By using ngModelGroup'], answer: 'By creating a new FormGroup with controls' },
  { id: 19, question: 'What is the difference between the `setValue` and `patchValue` methods in Angular forms?', options: ['`setValue` requires all form controls to be specified, `patchValue` allows partial updates', '`setValue` is used for resetting forms, `patchValue` is used for validation', 'There is no difference between them'], answer: '`setValue` requires all form controls to be specified, `patchValue` allows partial updates' },
  { id: 20, question: 'How can you display different styles for invalid and valid form controls?', options: ['Using CSS classes based on control validity', 'Using ngModel to style inputs', 'Setting inline styles in HTML', 'Binding styles directly to form controls'], answer: 'Using CSS classes based on control validity' },
  { id: 21, question: 'What type of Angular form validation is performed on the server side?', options: ['Asynchronous validation', 'Synchronous validation', 'Template Driven validation', 'Reactive validation'], answer: 'Asynchronous validation' },
  { id: 22, question: 'How can you programmatically set a form control value in Reactive Forms?', options: ['By calling setValue or patchValue methods', 'Using ngModel to update the value', 'Setting the value attribute in HTML', 'Directly manipulating the DOM'], answer: 'By calling setValue or patchValue methods' },
  { id: 23, question: 'Which Angular class is used to handle multiple form controls as an array?', options: ['FormArray', 'FormGroup', 'FormControl', 'NgForm'], answer: 'FormArray' },
  { id: 24, question: 'What is the role of the `Validators` class in Angular forms?', options: ['To apply validation rules to form controls', 'To bind form inputs to component properties', 'To group form controls', 'To reset form controls'], answer: 'To apply validation rules to form controls' },
  { id: 25, question: 'How can you display form data after form submission in Reactive Forms?', options: ['By accessing form values from the FormGroup', 'Using ngModel to bind form values', 'By manipulating the DOM directly', 'By using local reference variables'], answer: 'By accessing form values from the FormGroup' }
];
