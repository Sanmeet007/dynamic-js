# Dynamic JS

Experience the power of a dynamic JavaScript class that not only elegantly updates selected element values, but also intelligently recalls previous states.

## Quick Usage

For usage all you need to do is write your updatable varaible enclosed within `{{var}}`

```html
<div id="updatable">
    <p>My name is {{name}}</p>
</div>    
```

```js
const app = new DynamicJS("#updatable", {
    name: "?",
})
```

## Dynamic JS class

### Parameter

- `element` : A valid css selector for selecting elements
- `object` : State Object
- `mount` : Function , runs when initialized as well as on every update state
- `unmount` : Function , runs after updating state ( Cleanup )

> Add event listeners in mount function and remove event listeners on unmount

### updateState Method

Inorder to update state of object you need to call this function with new object with some updated values. In order to access the previous values pass a function whose 1st param is object with previous values.

Example :

```js
const app = new DynamicJS("..." , { 
    name : "?" , 
    age: 0
});
```

```js
// Updating only one var
app.updateState({
    name : "superman"
})
```

```js
// Updating multiple var
app.updateState({
    name : "superman",
    age:1
})
```

```js
// Updating with accessing previous values
app.updateState((prev) => {
    return {
        name : "superman",
        age: ++prev.age
    }
})
```

## Developer contact

Email : ssanmeet123@gmail.com
