# Style Guide
By: Robby Emmert

### Sass Convention
Here are some guidelines we've developed, trying to strike a healthy balance between taking advantage of the features Sass has to offer, and improving code maintainability.  

1. **Nesting styles should be used for namespacing only**  
This means that styles should typically only be nested 1 deep.  
```sass
.component-example {
    display: block;
    padding: 5px;

    .my-sub-class {
        color: $blue;
        margin: 0 auto;
    }

    .some-text {
        text-align: center;
    }

    .some-text h1 {
        font-weight: bold;
    }
}
```
Notice how the `h1` styles are not nested inside of `.some-text`, but conventional css selectors are used.  Nesting is only used for surrounding components, pages, and other groups of styles.  This makes debugging easier, and we've found it to increase code readability.

2. **Avoid nested media queries**  
Code can get messy, and hard to maintain if media queries are scattered through your code. They can also be hard to update when there are 12 of them, as opposed to one media query wrapping all of the relevant styles.  

**Bad:**
```sass
.my-component {
    font-weight: normal;

    @media screen and (min-width: $desktopWidth) {
        .test-style {
            font-weight: bold;
        }
    }
}
```  
**Good**
```sass
.my-component {
    font-weight: normal;
}

@media screen and (min-width: $desktopWidth) {
    .my-component {
        font-weight: bold;
    }
}
```
3. **Develop for Mobile First**  
Develop mobile styles first, then tablet, then desktop.  Most of our audience is usually on mobile, and starting with mobile usually saves ~30% time and ~30% code.  Simply code your mobile styles first, then override them with media queries for tablet and desktop widths.  
*Tip: Try to avoid media queries with `max-width` properties.  There's always the 1%, but usually `max-width` media queries are usually harder to write and can create maintainability problems.*

### Container Styles
1. Each container should be wrapped in an element with an *id* of something like `container-my-page`.  
2. Each container should in general have it's own file.
3. Container style files are stored in `/etc/styles/containers`, and named something like `my-container.scss`.
4. Make sure your container files are referenced in the list of container imports in `/etc/styles/base.scss`, so that Webpack can find them.

### Component Styles
1. Each component should be wrapped in an element with a class of something like `component-my-widget`.  
2. Each component should in general have it's own file.
3. Component style files are stored in `/etc/styles/components`, and named something like `my-component.scss`.
4. Make sure your component files are referenced in the list of component imports in `/etc/styles/base.scss`, so that Webpack can find them.
