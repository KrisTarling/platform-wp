# ![Shoe](library/images/apple-touch-icon.png) Platform-wp

A wordpress starter theme based on [bones](https://github.com/eddiemachado/bones), with bootstrap integrations and a focus on enhancing development workflow

If you haven't used the vanilla bones theme before, I recommend you get to know that first before using Platform. Platform assumes you are already familiar with bones, sass, wordpress and all the other component parts.

---

###Features:

#### Gulp Ready
The included gulpfile.js will handle all your minification, sass processing, image smushing and other helpful development tasks.

If you prefer to use another tool, such as grunt, there's nothing stopping you.

#### SASS
Straight-up indented sass, no curly braces & semicolons

#### bootstrap 24-grid
Customized bootstrap grid with sass variable breakpoints

#### HTML5 styleguide
A vanilla HTML styleguide for quickly designing and testing your fundamental CSS elements

#### Serperate dev folder
separated development and production files for cleaner output

---

### changelog

#### v 1.0.2

* integrated bootstrap js and added a bootstrap nav to the style-guide
* integrated bootstrap css and integrated into the bones style files where relevant
* removed some redundant style module files
* added caching and cdn support for bootstrap js


#### v 1.0.1

* added a tablet screen size to media queries
* made footer push to bottom of screen for situations where content doesn't fill screen
* integrated some of the bootstrap classes into template php