# How To Add A New Page
**How to add a new page to your app**  

By: Robby Emmert

1. **Add a file to the `src/pages` folder**  
 In this project, pages are layouts and compositions of other components.  
2. **Add a boilerplate ReactJS component class to your page's file**  
 See [DefaultPage](../../src/pages/default-page.jsx) for some ideas.
3. **Import your file in `src/pages/index.js`, then add it to the exports list.**  
 `import MyNewPage from './my-new-page.jsx'`  
Then add your class to the export list.
4. **Add a route to the routes constants file in `src/constants/routes.js`**  
 This will be the URL for your new page.
5. **Import your page from `src/app.js`**  
 There will likely already be an `import {...} from '../pages'` statement in this file.  You can just add your class to the list.  Webpack knows where to find the file already because of what you did in step 3.
6. **Add a route to your react router implementation**  
 If you haven't already, you'll want to `import { routes } from '../constants'` to get the URL you've specified in step 4.  If you need some background info on react router, and how to add a route, check out [this react router tutorial](https://github.com/reactjs/react-router-tutorial).  In the end, you'll want something that looks like this: `<Route path={routes.YOUR_ROUTE} component={YourPage} />`.
7. **Connect your page with react redux.**  
 Go back to your page's file (`src/pages/your-page.jsx`).  Add any props your page will need from the redux store to a `select` function near the bottom.  Make sure your page is exporting with something like `export default connect(select)(MyPage)`.  See [DefaultPage](../../src/pages/default-page.jsx) for a simple example.  Anything you add to the `select` function, will be available in your page's `this.props`.  Read the guide on creating components, or shop around for a react tutorial to learn what `this.props` is for.  FYI, you will need to import `react-redux`'s `connect` middleware i.e. `import { connect } from 'react-redux'`.
8. **Let redux know your page loaded by dispatching a RouteActions.setAppRoute action when your page loads.**  
 We need to let the redux store know what page you're on.  This allows redux to update things like your navigation bar when you change pages.  To do this, update your `componentWillMount` method with a dispatch to `RouteActions.setAppRoute()`, like so: `this.props.dispatch(ReactActions.setAppRoute(routes.MY_PAGE_ROUTE));`.  In case you didn't guess it, you'll have to import routes from your constants, and `RouteActions` from your actions folder with `import { RouteActions } from '../actions'`.

### Congrats! You Made a Page!
