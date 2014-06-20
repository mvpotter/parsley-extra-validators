// Greater than validator
window.ParsleyValidator.addValidator('gt', 
	function (value, requirement) {
    	var smaller_number = $(requirement).val();
        return value > smaller_number;
    }, 32)
    .addMessage('en', 'gt', 'This value should be greater');

// Greater than or equal to validator
window.ParsleyValidator.addValidator('ge', 
	function (value, requirement) {
    	var smaller_number = $(requirement).val();
        return value >= smaller_number;
    }, 32)
    .addMessage('en', 'ge', 'This value should be greater or equal');

// Less than validator
window.ParsleyValidator.addValidator('lt', 
	function (value, requirement) {
    	var bigger_number = $(requirement).val();
        return value < bigger_number;
    }, 32)
    .addMessage('en', 'lt', 'This value should be less');

// Less than or equal to validator
window.ParsleyValidator.addValidator('le', 
	function (value, requirement) {
    	var bigger_number = $(requirement).val();
        return value <= bigger_number;
    }, 32)
    .addMessage('en', 'le', 'This value should be less or equal');
