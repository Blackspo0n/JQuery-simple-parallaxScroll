# JQuery_Simple_parallaxScroll
Very alpha of a smooth parallaxscroll

# How To use

Define a container with a inner Container:
```html
<div id="parallax">
  <div></div>
</div>
```

Define a style for it:

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
