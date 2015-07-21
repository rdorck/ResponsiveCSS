/* /www/htdocs/modules/solidblueheader-800px/js/header.js */
var     UDGSAFormFieldCleared = null;
function UDGSAFormFieldFocus(field)
{
if ( UDGSAFormFieldCleared == null ) {
UDGSAFormFieldCleared = field.value;
field.value = "";
}
return true;
}
function UDGSAFormFieldBlur(field)
{
if ( (UDGSAFormFieldCleared != null) && (field.value == '') ) {
field.value = UDGSAFormFieldCleared;
UDGSAFormFieldCleared = null;
}
return true;
}

