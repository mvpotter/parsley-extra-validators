# ATTENTION

The [library](https://github.com/guillaumepotier/Parsley.js/blob/master/src/extra/validator/comparison.js) is a part of [ParsleyJs Project](https://github.com/guillaumepotier/Parsley.js) now. Thus, it will no longer be supported.

parsley-extra-validators
========================

Extra validators for [ParsleyJs framework](https://github.com/guillaumepotier/Parsley.js)

## Usage

Add script with validators to your page and use required validators as parsley's ones (see [docs](http://parsleyjs.org/doc/)): 

```html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="parsley.min.js"></script>
<script type="text/javascript" src="parsley-fields-comparison-validators.js"></script>
...
<form data-parsley-validate>
		<h3>Speed range</h3>
		<label for="min">Min</label>
		<input id="min" type="text"/>
		<label for="max">Max</label>
		<input id="max" type="text" data-parsley-gt="#min" />
</form>
```

parsley-fields-comparison-validators
------------------------------------

Contains validators for comparing fields' values. Unfortunately, default implementation contains only `data-parsley-equalto` tag to check fields' values equality. The library has validators to compare fields' values and contains the following ones:

|Name                    |API                                       | Description |
|:-----------------------|:-----------------------------------------|:------------|
|Not equal to            | `data-parsley-notequalto="#anotherfield"`|Validates that the value is not identical to another field's one
|Greater than            | `data-parsley-gt="#anotherfield"`        |Validates that the value is greater than another field's one
|Greater than or equal to| `data-parsley-ge="#anotherfield"`        |Validates that the value is greater than or equal to another field's one
|Less than               | `data-parsley-lt="#anotherfield"`        |Validates that the value is less than another field's one
|Less than or equals to  | `data-parsley-le="#anotherfield"`        |Validates that the value is less than or equal to another field's one
