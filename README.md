# JQuery_Simple_parallaxScroll
Very alpha of a smooth parallaxscroll. Useable for creating nice parallax headers.

# How To use
Define a container with a inner container:
```html
<div id="parallax">
  <div></div>
</div>
```
The outer container should hold the parallax background and the inner container should hold the Logo.

Define a style for both containers like this:

```css
#parallax {
    height: 435px !important;
    background: url('background.png') top center!important;
    background-size: auto 100%;
}

#parallax div {
    margin: 0 auto;
    background: url('logo.png') center center no-repeat!important;
    width: 385px;
    height: 435px;
}
```

Call the Plugin:

```javascript
jQuery("#parallax").parallaxScroll({});
```
