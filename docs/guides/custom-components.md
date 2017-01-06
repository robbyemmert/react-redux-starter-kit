# Custom Components  
**How to build your own Web elements with JSX and react**  

By: Robby Emmert

1. **Create a file for your component under `src/components`.**   
 See [DefaultComponent](../../src/components/default-component.jsx) for some ideas on what to start with.
2. **Import your component into `src/components/index.js` and add it to the exports list.**  
 This should look something like `import MyComponent from './my-component.jsx'`.  Don't forget to add your component class to the exports list.
3. **Inherit props (Optional).**  
 add someProp={this.someProp} to your base HTML element for each prop you want to inherit (className and id are usually important). This allows people using your component to pass props to the actual HTML elements.  For example, if you are creating a Button class, you can automatically expose all default button props such as `onClick` to your users.  You can also get selective (which is a good idea) and do more advanced things like `className={['my-class', 'some-other-class', this.props.className].join(' ')}`.  This combines 'my class', 'some-other-class', and whatever the user is passing in as className.  NOTE: It's a good idea to add a standard className to all of your components wrapper elements i.e. 'component-my-component'.
4. **Import your component wherever you want to use it**  
 Import your component with `import {MyComponent} from '../components' wherever you want to use it.`.  Use it like `<MyComponent myProp="test" anotherTest={someVar} />`.
