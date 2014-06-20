parsley-extra-validators
========================

Extra validators for ParsleyJs framework

## Usage

Add script with validators to your page and use required validators as parsley's ones (see [docs](http://parsleyjs.org/doc/)): 

```html
<script type="text/javascript" src="parsley.min.js"></script>
<script type="text/javascript" src="parsley-comparison-validators.js"></script>
```

parsley-fields-comparison-validators
------------------------------------

Contains validators for comparing numeric fields' values. Unfortunately, default implementation contains only `data-parsley-equalto` tag to check fields' values equality. The library has validators to compare numeric fields' values and contains the following ones:

|Name                    |API                               | Description |
|:-----------------------|:---------------------------------|:------------|
|Greater than            | `data-parsley-gt="#anotherfield"`|Validates that the value is greater than another field's one
|Greater than or equal to| `data-parsley-ge="#anotherfield"`|Validates that the value is greater than or equal to another field's one
|Less than               | `data-parsley-lt="#anotherfield"`|Validates that the value is less than another field's one
|Less than or equals to  | `data-parsley-le="#anotherfield"`|Validates that the value is less than or equal to another field's one


## TODO

Add usage examples
