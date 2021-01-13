# JavaScript UI library

## Simple library for using in projects.

## Documentation

- provide `<link>` to the required core stylesheet.

```html
<!-- Required Core stylesheet -->
<link rel="stylesheet" href="css/style.css" />
```

- Add script.js to your page.

```html
<script src="script.js"></script>
```

### Carousel

#### Add markup

```html
<div class="carousel" id="example">
  <ol class="carousel-indicators">
    <li class="active" data-slide-to="0"></li>
    <li data-slide-to="1"></li>
    <li data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-slides">
      <div class="carousel-item">...</div>
      <div class="carousel-item">...</div>
      <div class="carousel-item">...</div>
    </div>
  </div>
  <a href="#" class="carousel-prev" data-slide="prev">
    <span class="carousel-prev-icon">&lt;</span>
  </a>
  <a href="#" class="carousel-next" data-slide="next">
    <span class="carousel-next-icon">&gt;</span>
  </a>
</div>
```

### Accordion

#### Add markup

```html
<div class="accordion mt-20 block-center">
  <div class="accordion-head">
    <span>Collapse first element</span>
  </div>
  <div class="accordion-content">
    <div class="accordion-inner">Lorem ipsum ...</div>
  </div>
  <div class="accordion-head">
    <span>Collapse second element</span>
  </div>
  <div class="accordion-content">
    <div class="accordion-inner">Lorem ipsum ...</div>
  </div>
</div>
```

### Tabs

#### Add markup

```html
<div class="tab mt-20 block-center">
  <div class="tab-panel" data-tabpanel>
    <div class="tab-item tab-item--active">Content 1</div>
    <div class="tab-item">Content 2</div>
    <div class="tab-item">Content 3</div>
  </div>
  <div class="tab-content tab-content--active">Lorem ipsum ...</div>
  <div class="tab-content">Lorem ipsum ...</div>
  <div class="tab-content">Lorem ipsum ...</div>
</div>
```

### Dropdown

#### Add markup

```html
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">
    Dropdown button
  </button>
  <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
    <a href="#" class="dropdown-item">Action</a>
    <a href="#" class="dropdown-item">Action #2</a>
    <a href="#" class="dropdown-item">Action #3</a>
  </div>
</div>
```

### Card & Modal

#### Add markup

```html
<div class="card">
  <div class="card-body">
    <div class="card-title"></div>
    <p class="card-text"></p>
    <a
      href="#"
      id="trigger"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    ></a>
  </div>
</div>

<div class="modal" id="exampleModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <button class="close" data-close>
        <span>&times;</span>
      </button>
      <div class="modal-header"></div>
      <div class="modal-body"></div>
      <div class="modal-footer">
        <button class="btn btn-danger" data-close>Close</button>
      </div>
    </div>
  </div>
</div>
```

## Let's started

1. **To run the project write in the command line:**

   ```shell
   $ npm i
   $ gulp
   ```

2. **Open the source code and start editing!**

   Your site is now running at `http://localhost:4000`
