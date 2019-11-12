/* eslint-disable no-redeclare */

'use ctrict'; 
var uname = prompt('what is your uname?');
alert('you are welcome' + uname);
var old = prompt(' do you know how old I am ?');
var lower = old.toLowerCase();
switch (lower) {
case 'yes':case 'y':alert('this is right');break;
case 'no':case 'n':alert('wrong choice');break; default: break;
}
//console.log('old=',old);
var live = prompt(' do you live in my city ?');
var lower = live.toLowerCase();
switch (lower) {
case 'yes':
case 'y':alert('wow amazing');
  break;
case 'no':
case 'n':
  alert('its a beautiful city');
  break;
default:
  break;
}
//console.log('live=',live);
var intrested = prompt(' are you intrested in web pages ?');
var lower = intrested.toLowerCase();
switch(lower) {
case 'yes':
case 'y':alert('me too');
  break;
case 'no':
case 'n':
  alert('oh sad to hear that');
  break;
default:
  break;
}//console.log('intrested=',intrested);
var like = prompt(' do you like my job ?');
var lower = like.toLowerCase();
switch (lower) {
case 'yes':
case 'y':alert('thank you');
  break;
case 'no':
case 'n':
  alert('bad news');
  break;
default:
  break;
}//console.log('like=',like);
var finish = prompt(' did you finished your sudy ?');
var lower = finish.toLowerCase();
switch (lower) {
case 'yes':
case 'y':alert('good gob');
  break;
case 'no':
case 'n':
  alert('good luck in it');
  break;
default:
  break;
}//console.log('finsh=',finish);



