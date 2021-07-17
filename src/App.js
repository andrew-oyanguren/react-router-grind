import { Switch, Route, Redirect } from 'react-router-dom';

// Import Pages:
import Welcome from './pages/Welcome/Welcome';
import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail/ProductDetail';

// Import Layout Components:
import MainHeader from './components/Layout/MainHeader/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
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


=== Adding Dynamic Routes ===

Dynamic Routes: 

To create a dynamic route you need to use a colon (:) after your slash in your url address.

Example: path='products/:productId'

* The "productId" after colon is a placeholder name for anything. 

Syntax Example: our-domain.com/products/anything-can-go-here



=== Getting Access to Dynamic Route ===

To really utilize dynamic values, entered inside (path) of Route component,
we need to be able to access it inside of the component rendered by that root, nested inside.

=== UseParams Hook ===

To get access to that dynamic url from inside the nested component, we can use the useParams hook!

When we call the useParams() hook, it will return a params-object that we can store inside a params constant.

* Params Object:

The Params object will have key/value pairs, where the keys the dynamic segments included in the path of the route component.

Ex: /:dynamic-route

* NOTE: You could have multiple dynamic segments in your URL, if needed.



=== Configuring Routes ===

* Structuring URL's:

The URL path works like a folder structure, and new related-pages are added like subfolders, as new segments.

** NOTE: React Router works where ALL the routes that match the current path are loaded,
even any new segments (related pages).

* Sometimes this is exactly what you want, for example showing additional detail on the same page.

=== Switch ===

The Swith Component: Gets wrapped around all of your routes, and Switch provides a the functionality,
where only one Route will be active at a time.

* BUT the Route that becomes active is the path that is matched first!

* Exact(prop): This prop tells react-router that the url should lead to match,
only if we have an exact match.


=== Nested Routes ===

You could also want to have a <Route> inside of a page.

For Example: On your welcome page, you may want to render variations of the welcome page:

1) Regular Welcome Page
2) New User's Welcome Page

* NOTE: You can define <Routes> where ever you want, and if the component, that the route is in,
is active, the <Route> will be evaluated by react-router-dom.

For Example: If Your <Route> is on the Welcome Page, the route will only be evaluated when the Welcome
Page is active.

=== Defining Nested Route ===

* NOTE: When you are defining your path, you need to add onto the current page the Route is nested on,
so it will be evaluated when the parent component is active.



===== Redirect Component =====

Redirects the user to the correct page, for example when your home page is your domain/home, 
and the user only type domain, You cam redirect them automatically to /home.

=== Using Redirect ===

You start by creating a starting <Route> with a path of '/', so just domain, and
be sure to add the exact prop. Then inside add the redirect component.

Redirect: Similar to Link, it takes a "to" (prop) that allows you to define a redirecting path.

*/