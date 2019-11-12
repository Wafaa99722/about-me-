
'use-strict';

var uname = prompt('what is your uname?');
alert('you are welcome' + uname);
var old = prompt(' do you know how old I am ?');
var lower = old.toLowerCase();
switch (lower) {
case 'yes':
case 'y':
  alert('this is right');break;
case 'no':
case 'n':
  alert('wrong choice');
  break;
default:
  alert('sorry only yes no questions');
  break;
}
//console.log('old=',old);
var live = prompt(' do you live in my city ?');
var answer = live.toLowerCase();
switch (answer) {
case 'yes':
case 'y':
  alert('wow amazing');
  break;
case 'no':
case 'n':
  alert('its a beautiful city');
  break;
default:
  alert('sorry only yes no questions');
  break;
}
//console.log('live=',live);
var intrested = prompt(' are you intrested in web pages ?');
var intrest = intrested.toLowerCase();
switch(intrest) {
case 'yes':
case 'y':
  alert('me too');
  break;
case 'no':
case 'n':
  alert('oh sad to hear that');
  break;
default:
  alert('sorry only yes no questions');
  break;
}//console.log('intrested=',intrested);
var like = prompt(' do you like my job ?');
var job = like.toLowerCase();
switch (job) {
case 'yes':
case 'y':alert('thank you');
  break;
case 'no':
case 'n':
  alert('bad news');
  break;
default:
  alert('sorry only yes no questions');
  break;
}//console.log('like=',like);
var finish = prompt(' did you finished your sudy ?');
var done = finish.toLowerCase();
switch (done) {
case 'yes':
case 'y':alert('good gob');
  break;
case 'no':
case 'n':
  alert('good luck in it');
  break;
default:
  alert('sorry only yes no questions');
  break;
}//console.log('finsh=',finish);
alert('you are welcome on my page' + name );



