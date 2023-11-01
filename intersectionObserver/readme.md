# intersection observer

## About
Intersection Observer is a JavaScript API that enables us to observe an element and detect when it passes a specified point in a scrolling container — often (but not always) the viewport — triggering a callback function.

It can be considered more performant than listening for scroll events on the main thread, as it is asynchronous, and the callback will only fire when the element we’re observing meets the specified threshold, instead every time the scroll position is updated. 

## Usage
To use Intersection Observer, we need to first create a new observer, which takes two parameters: 
- An object with the observer’s options, and 
- the callback function that we want to execute whenever the element we’re observing (known as the observer target) intersects with the root (the scrolling container, which must be an ancestor of the target element).

```
const options = {
  root: document.querySelector('[data-scroll-root]'),
  rootMargin: '0px',
  threshold: 1.0
}

const callback = (entries, observer) => {
  entries.forEach((entry) => console.log(entry))
}

const observer = new IntersectionObserver(callback, options)
```

Now create the target
```
const targetEl = document.querySelector('[data-target]')

observer.observe(targetEl)
```

## option values

### rootMargin
The rootMargin value is a bit like adding CSS margins to the root element — and, just like margins, can take multiple values, including negative values. The target element will be considered to be intersecting relative to the margins.

### threshold
The threshold can consist of a single value or an array of values between 0 and 1. It represents the proportion of the element that must be within the root bounds for it to be considered intersecting. Using the default value of 1, the callback will fire when 100% of the target element is visible within the root.

## uses
- Lazy-loading of images or other content as a page is scrolled.
- Implementing "infinite scrolling" websites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
- Reporting of visibility of advertisements in order to calculate ad revenues.
- Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.

