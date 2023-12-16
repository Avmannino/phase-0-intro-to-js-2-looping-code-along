const names = ['Guadalupe', 'Ollie', 'Aki']
function writeCards(names, eventName) 
{ let messagesArray = [];
  for (let i = 0; i < names.length; i++) {
    messagesArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return messagesArray;}

  console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], 'birthday'))

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}