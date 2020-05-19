# AngularAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Description

Create a project with SCSS and Routing. 

## >> Created project with scss and Routing
.
Setup angular material.  
## Done with Setup Angular Material in the project.

create two lazy-loaded components. 

## >> Created two lazy-loaded components that is "quiz-cardComponent" which is implemented inside homecomponent , In homecomponent "start quiz" button is there  after clicking on that button quiz-cardcomponent loaded as lazy component and appear with the questions and answer options after answer the particular question next question get appears and it is  going untill last question. 

## One more component created with lazy loading that is "customersComponent" when you navigate "customers" menu from  menu bar  then customercomponent loaded as lazy component you will see the nice customer profile card designs with scss and Angular material.

Create navigation between them. 
## Naviagation menu implementated.

Create a shared component. 
## Created Carousel component you can navigate it from shared component menu

Inject the shared component as a child component in one component and as a popup in second. 

## Carousel Component included as an child component inside Shared Component and also implemented it in  inside the  material dialog and You can see this in Dashboard component when you click on "open shared component as popup button" .  

Add activate guard on at least one component.

## Here implmented the authnication with Auth0 Acoount app , After sucessfully login you will redirect to home component and Dashboard Menu get appeared in menu bar also implemented active guard in Dashboard Component. In Dashboard Component you can see the all blog posts data in matrial tabular format listing with the Delete icon button . click on delete icon button  the particular posts get deleted and you can also see "add post button" when you click on that button then post form get appeared in material dialog format with some form inputs elements with save and cancel button . on click on save button you add the post and click on cancel button dialog get close .  

## Without Login you can not see the Dashboard Component You have to login first to see Dashboard.
