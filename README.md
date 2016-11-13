# LeftyRighty.js

LeftyRighty is a plugin developed by Parsec Digital to make the mobile web easier to use for everyone. LeftyRighty will flip important elements in a row to make crucial elements easier to reach with one hand. LeftyRighty was built for the physically disabled and handicapped.

This was inspired by looking at mobile heat maps of comfortable thumb reaches for larger devices. Tapping on an important CTA on the right side of the screen is very difficult for someone with only a left hand to do. LeftyRighty will flip that CTA to make it easier for that individual. 

## Getting Started
LeftyRighty is built using the jQuery library and with a grid layout in mind. LeftyRighty supports Bootstrap columns (not by default) and rows. When developing your website, you should be developing your mobile site with a defeault hand in mind; default is right, unless specified left. You can flip an entire row, flip the first and last items, or flip two specific items in a row. You can also nest rows inside of rows and make each of them behave differently or not at all.

## Usage
Connect your JavaScript and CSS dependancies and initialize.

### Dependancies
```html
<link rel="stylesheet" href="css/lefty-righty.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="js/lefty-righty.min.js"></script>

<script>
    $('body').leftyrighty();
</script>
```

### HTML Structure
LeftyRighty was built with a grid format in mind. Meaning, for this to work, you'll need to code your website with rows and columns. LeftyRighty does support Bootstrap through the API.

#### Without Bootstrap (Default)
Basic row structure with LeftyRighty's .lr-item class.
```html
<div class="row">
    <div class="lr-item">
        Column 1
    </div>
    
    <div class="lr-item">
        Column 2
    </div>
    
    <div class="lr-item">
        Column 3
    </div>
</div>
```
#### With Bootstrap (via API option)
If you are using Bootstrap, you will need to initialize the plugin with the Bootstrap API call.
```html
<div class="row">
    <div class="col-sm-4">
        Column 1
    </div>
    
    <div class="col-sm-4">
        Column 2
    </div>
    
    <div class="col-sm-4">
        Column 3
    </div>
</div>

<script>
    $('body').leftyrighty({
        bootstrap: true // API call
    });
</script>
```

There are __three__ main core functions that LeftyRighty supports. These can be nested and mixed and matched for greater control.

1. Flip the entire row
2. Flip the first and last item of the row
3. Flip _two_ specific items in a row

These functions can be done by simply adding a class to the row or in the third case, an item.

##### Row Reverse
```html
<div class="row lr-reverse">
    <!-- columns -->
</div>
```

##### Flip First and Last Item
```html
<div class="row lr-first-last">
    <!-- columns -->
</div>
```


##### Flip Two Specific Items
Add the .lr-spec class to two items you want to flip on click.
```html
<div class="row">
    <div class="lr-item">
        Column 1
    </div>
    
    <div class="lr-item lr-spec">
        Column 2
    </div>
    
    <div class="lr-item">
        Column 3
    </div>
    
    <div class="lr-item">
        Column 4
    </div>
    
    <div class="lr-item lr-spec">
        Column 5
    </div>
    
    <div class="lr-item">
        Column 6
    </div>
</div>
```

### API (Options)
<table class="table-bordered">
    <thead>
        <tr>
            <th>Option</th>
            <th>Default Value</th>
            <th>Type</th>
        </tr>
    </thead>
    <tr>
        <td>bootstrap</td>
        <td>false</td>
        <td>Boolean</td>
    </tr>
    <tr>
        <td>showPopup</td>
        <td>true</td>
        <td>Boolean</td>
    </tr>
    <tr>
        <td>defaultHand</td>
        <td>"right"</td>
        <td>String</td>
    </tr>
    <tr>
        <td>showToggleButton</td>
        <td>true</td>
        <td>Boolean</td>
    </tr>
    <tr>
        <td>showOptimizationNotice</td>
        <td>true</td>
        <td>Boolean</td>
    </tr>
    <tr>
        <td>popupDelay</td>
        <td>1500</td>
        <td>Int</td>
    </tr>
    <tr>
        <td>showPopupOnce</td>
        <td>true</td>
        <td>Boolean</td>
    </tr>
    <tr>
        <td>addClassToFlipped</td>
        <td>true</td>
        <td>Boolean</td>
    </tr>
    <tr>
        <td>mobileOnly</td>
        <td>true</td>
        <td>Boolean</td>
    </tr>
</table>

### Contributions
Fork and submit pull requests! This is a one man operation and any feedback or improvements will not only help the project, but the people that are relying on this.

### Changelog

V1: Initial launch
