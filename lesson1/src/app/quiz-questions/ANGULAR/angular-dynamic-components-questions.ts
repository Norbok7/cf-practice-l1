export const ANGULAR_DYNAMIC_COMPONENTS_QUESTIONS = [
  { id: 1, question: 'What are Dynamic Components in Angular?', options: ['Components loaded at build time', 'Components loaded programmatically through code', 'Components that cannot be loaded dynamically'], answer: 'Components loaded programmatically through code' },
  { id: 2, question: 'Which Angular decorator is used to define a module?', options: ['@Component', '@Injectable', '@NgModule', '@Directive'], answer: '@NgModule' },
  { id: 3, question: 'What is Code-Splitting in Angular?', options: ['Splitting code into smaller chunks', 'Combining multiple components into one', 'Lazy-loading all components'], answer: 'Splitting code into smaller chunks' },
  { id: 4, question: 'What does Lazy-Loading do in Angular?', options: ['Loads all modules at startup', 'Loads non-critical resources only when needed', 'Immediately loads all resources'], answer: 'Loads non-critical resources only when needed' },
  { id: 5, question: 'What is Ahead-of-Time (AOT) Compilation?', options: ['Compiling code at runtime', 'Compiling code before execution to improve performance', 'Loading code on-demand'], answer: 'Compiling code before execution to improve performance' },
  { id: 6, question: 'How do you create a new component using Angular CLI?', options: ['ng g c component-name', 'ng create component component-name', 'ng generate component component-name'], answer: 'ng g c component-name' },
  { id: 7, question: 'In the `AlertComponent`, what does the `@Input()` decorator do?', options: ['Defines a property that can be bound to a parent component', 'Injects a service into the component', 'Sets the component’s metadata'], answer: 'Defines a property that can be bound to a parent component' },
  { id: 8, question: 'How do you display the `AlertComponent` conditionally in the `LibraryComponent`?', options: ['Using `*ngIf` directive', 'Using `ngSwitch` directive', 'Using `ngFor` directive'], answer: 'Using `*ngIf` directive' },
  { id: 9, question: 'What is the purpose of `viewContainerRef` in the `PlaceholderDirective`?', options: ['To access the view container in a component', 'To define a new directive', 'To create a new component'], answer: 'To access the view container in a component' },
  { id: 10, question: 'What Angular module should be used to import HTTP services?', options: ['HttpClientModule', 'FormsModule', 'ReactiveFormsModule', 'RouterModule'], answer: 'HttpClientModule' },
  { id: 11, question: 'What method is used to clear the view container in `BookshelfComponent`?', options: ['`clear()`', '`remove()`', '`destroy()`'], answer: '`clear()`' },
  { id: 12, question: 'How can you ensure that a module is only loaded when it is needed?', options: ['Use Lazy-Loading', 'Use Eager Loading', 'Preload all modules'], answer: 'Use Lazy-Loading' },
  { id: 13, question: 'In Angular, which lifecycle hook is called after the view has been fully initialized?', options: ['ngOnInit', 'ngAfterViewInit', 'ngOnChanges'], answer: 'ngAfterViewInit' },
  { id: 14, question: 'What is the main purpose of Angular modules?', options: ['To group related components, directives, and pipes', 'To style components', 'To define routes'], answer: 'To group related components, directives, and pipes' },
  { id: 15, question: 'How can you pre-load modules in Angular?', options: ['Use `PreloadAllModules` strategy', 'Use `Lazy-Loading` strategy', 'Use `Eager Loading`'], answer: 'Use `PreloadAllModules` strategy' },
  { id: 16, question: 'What is the function of the `@Output()` decorator in Angular?', options: ['Defines an event that a child component can emit to a parent component', 'Defines a property that can be bound to a parent component', 'Injects a service into a component'], answer: 'Defines an event that a child component can emit to a parent component' },
  { id: 17, question: 'What is the default change detection strategy in Angular?', options: ['OnPush', 'Default', 'NoChange', 'Manual'], answer: 'Default' },
  { id: 18, question: 'Which Angular module should be used to create reactive forms?', options: ['ReactiveFormsModule', 'FormsModule', 'HttpClientModule'], answer: 'ReactiveFormsModule' },
  { id: 19, question: 'How do you bind a form input to a component property in Angular?', options: ['Using `[(ngModel)]` syntax', 'Using `{{ }}` syntax', 'Using `@Input` decorator'], answer: 'Using `[(ngModel)]` syntax' },
  { id: 20, question: 'In which file should you declare feature modules in Angular?', options: ['app.module.ts', 'shared.module.ts', 'feature.module.ts'], answer: 'feature.module.ts' },
  { id: 21, question: 'What is a routing module in Angular used for?', options: ['To define and configure routes for the application', 'To handle HTTP requests', 'To style components'], answer: 'To define and configure routes for the application' },
  { id: 22, question: 'Which directive is used to create a placeholder for dynamic components?', options: ['`ng-template`', '`ng-container`', '`ng-content`'], answer: '`ng-template`' },
  { id: 23, question: 'What does the `RouterModule.forChild()` method do?', options: ['Configures routes for feature modules', 'Configures routes for the root module', 'Handles HTTP requests'], answer: 'Configures routes for feature modules' },
  { id: 24, question: 'How do you create a lazy-loaded module in Angular?', options: ['Use `loadChildren` in routing configuration', 'Import the module directly in app.module.ts', 'Declare the module in a component'], answer: 'Use `loadChildren` in routing configuration' },
  { id: 25, question: 'What does the `handleCloseModal()` method do in the `LibraryComponent`?', options: ['Sets the alert variable to null', 'Displays the alert message', 'Clears the alert from the view'], answer: 'Sets the alert variable to null' }
];
