
function formatName(name: string) {

  var splitted = name.split('-');

  var newString = '';

  for (let index = 0; index < splitted.length; index++) {
    newString += splitted[index].toUpperCase() + ' ';
  }

  return newString.trim();
}

export default formatName;