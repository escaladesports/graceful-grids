# Graceful Grids

Graceful Grids is a lightweight Sass mixin for applying grids to any element. Unlike front-end frameworks like Bootstrap or Foundation, it does not require any additions to your markup. Unlike Susy Grids, declaring a grid can be done with just one line in your Sass code, and Graceful Grids always outputs [DRY CSS](http://vanseodesign.com/css/dry-principles/) whenever possible.

## Installation:
### npm
```
$ npm install --save graceful-grids
```

### Bower
```
$ bower install --save graceful-grids
```

## Standard Grids:

```
@include grid(<row selector>, (
	<breakpoint>: <columns span>
));
```

Example:

```
@import 'node_modules/graceful-grids/graceful-grids';

@include grid('.row', (
	600px: 6 6 6 6,
	1000px: 3 9 9 3
));
```


```
<div class="row">
	<div>
		<div>One</div>
	</div>
	<div>
		<div>Two</div>
	</div>
	<div>
		<div>Three</div>
	</div>
	<div>
		<div>Four</div>
	</div>
</div>
```

## Block Grids:

```
@include grid(<row selector>, (
	<breakpoint>: <number of blocks per row>
));
```

Example:

```
@import 'node_modules/graceful-grids/graceful-grids';

@include grid('.row', (
	600px: 2,
	1000px: 4
));
```


```
<div class="row">
	<div>
		<div>One</div>
	</div>
	<div>
		<div>Two</div>
	</div>
	<div>
		<div>Three</div>
	</div>
	<div>
		<div>Four</div>
	</div>
</div>
```


## Options:
- `padding`: Sets the gutter padding for the grid. Set to 0 to remove. Default: 10px
- `columns`: Sets the total number of columns for the row. Default: 12

Options example:

```
@include grid('.row', (
	600px: 3 3 3 3,
	1000px: 2 4 6 6
), (
	padding: 20px,
	columns: 6
));
```

You can also change the total number of columns for each breakpoint:

```
@include grid('.row', (
	600px: 3 3 3 3,
	1000px: 5 2 4 3
), (
	600px: 6,
	1000px: 7
));
```
