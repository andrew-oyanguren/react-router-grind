import { Route } from 'react-router-dom';

// Import Pages:
import Welcome from './pages/Welcome/Welcome';
import Products from './pages/Products/Products';

// Import Layout Components:
import MainHeader from './components/Layout/MainHeader/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path='/welcome' exact>
          <Welcome />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;



/*

// ===== React Router ===== //

The goal with using React Router is to define different paths on our page,
and load different components for different paths.

* React Router handles and makes this process very easy for us.

For Example:

1) our-domain.com/ => Component A
2) our-domain.com/products => Component B


=== Getting Started ===

1) BrowserRouter: 

The BroswerRouter component, provided by react-rouder-dom package, 
wraps around your <app /> component in your main idex.js file.

* This then activates React Router in your project, and all of it's features.


2) Route: 

Is a component that allows us to define a certain path, and when the address matches that path, 
the component nested inside the Router component gets rendered. The Route is a wrapping component.

* Path (prop): Route components wants a path prop, that allows you to define the url path,
in which to render the nested component.

* Exact (prop):


=== Using Links ===

* NOTE: Using regular anchor elements sends a new request, and refreshes the page. 
We lose any application state that wwe may have when we re load the page,
and that goes against everything we are trying to achieve using React,
and building an SPA.

React Router provides us with two options that prevent the browser default:

1) Link Component:

Allows us to create a 'link'.

* To (prop): Instead of an 'href' the link wants a 'to' prop that allows us to define the destination.

2) NavLink Component:

Also creates a link just like the Link components, but also provides us with an active prop that
allows us to add 'active' styling to the links.

* ActiveClassName (prop): NavLink accepts an activeClassName prop,
and this prop allows us to set a css class when the NavLink is 'active'.


*/