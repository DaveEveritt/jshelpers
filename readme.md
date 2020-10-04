# JavaScript helper functions

**Simplified helper functions** for selecting HTML elements, collections of elements and parents of elements. An alternative to the most commonly-used JQuery functions for locating elements.

See a [live example](https://front-end-materials.github.io/js-helpers/)

- `document.getElementById()` becomes `id(selector)` (returns a single element)
- `document.querySelector()` becomes `$(selector)` (returns a single element)
- `document.querySelectorAll()` becomes `$$(selector)` (returns a ready-to-use array of elments)
- [`el.closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) becomes `up(element", "parent")` (returns the first specified parent element of the given element)

These can be used in combination, for example to find the main tag that includes section tags: `up($("main > section"), "main")`

Suggestions welcome.

---

<small>from Sebastian De Deyne, *JavaScript Framework Diet* [Selecting elements (part 1)](https://sebastiandedeyne.com/javascript-framework-diet/selecting-elements-part-1/)</small>
