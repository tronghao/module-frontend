# haodt-modules
Reusable features of me contains util, vue, react, ...

## util
`dataURLtoFile(dataurl, filename)`\
*dataURLtoFile* : parse base64 to file like input form\
Response: File

`getYears(from, to, select = false)`\
*getYears* : data years from->to\
Response: Array\
Select true return type item { value: 1, name: '1'} else only number

`getMonths(from = 1, to = 12, select = false)`\
*getMonths* : data month from->to\
Response: Array\
Select true return type item { value: 1, name: '1'} else only number

`getHours(from = 0, to = 23, select = false)`\
*getHours* : data hour from->to\
Response: Array\
Select true return type item { value: 1, name: '1'} else only number

`getMinutes(step = 5, select = false)`\
*getMinutes* : data minutes 0 - 59 by step\
Response: Array\
Select true return type item { value: 1, name: '1'} else only number

`daysInMonth(dateString, subName = true, select = false)`\
*daysInMonth* : data days in month\
> dateString date type string exp: 1990-01-01

Response: Array\
Select true return type item { value: 1, name: '1'} else only number\
subName name have " 日" in response item

`scrollToTop(top = 0)`\
*scrollToTop* : handle scroll to top\
Response: Action scoll to top

`formatDate(date)`\
*formatDate* : exp: 1990-01-01 -> 1990年1月1\
Response: String

`stripHtml(html)`\
*stripHtml* : strip html\
Response: String

`checkOnlyNumber(string)`\
*checkOnlyNumber* : check only number of string\
Response: Boolean\
true => is number else not number

`convertBase64(val)`\
*convertBase64* : text to base64\
Response: String
## vue 2

## vue 3
`<SpinnerV3 :loading="loading" />`\
*SpinnerV3* : Component for loading
