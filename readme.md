# ![Shoe](library/images/apple-touch-icon.png) Platform-wp

A wordpress starter theme based on [bones](https://github.com/eddiemachado/bones), with bootstrap 3 integrations and a focus on enhancing development workflow

If you haven't used the vanilla bones theme before, I recommend you get to know that first before using Platform. Platform assumes you are already familiar with bones, wordpress, bootstrap and all the other component parts.

---

#### Features:

### Bootstrap 3 grid with Mixins!
Sass variable breakpoints & column width mixins

No more assigning unsemantic classes like `.col-lg-8.col-lg-offset-3` to your HTML & PHP

If you want the sidebar to be six columns wide at screen width 992px and above, just add the following to `md.sass`:
```sass
.sidebar
  +col($six)
```

And if you want md.sass to begin at 820px instead? Add:
```
$md: 820px
```
into `variables.sass` and you're done!


### Gulp Ready
The included gulpfile.js will handle all your minification, sass processing, image smushing and other helpful development tasks.

If you prefer to use another tool, such as grunt, there's nothing stopping you.


### SASS
Straight-up indented sass, no curly braces or semicolons.


### Static styleguide
Vanilla HTML styleguide for quickly designing and testing fundamental CSS elements.


### Serperate dev folder
separate sass & js development folders for cleaner output.

---

### Changelog

#### 1.0.3

* added browser sourcemapping for easier sass development/debugging
* added node package for gulp configuration
* converted bootstrap col classes to sass mixins - no more clunky classes

#### 1.0.2

* integrated bootstrap js and added a bootstrap nav to the style-guide
* integrated bootstrap css and integrated into the bones style files where relevant
* removed some redundant style module files
* added caching and cdn support for bootstrap js


#### 1.0.1

* added a tablet screen size to media queries
* made footer push to bottom of screen for situations where content doesn't fill screen
* integrated some of the bootstrap classes into template php