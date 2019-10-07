//function to split up by n words
function nGramsWords(sentence, n) {
  var words = sentence.split(/\W+/);
  var total = words.length - n;
  var grams = [];
  for(var i = 0; i <= total; i++) {
    var seq = '';
    for (var j = i; j < i + n; j++) {
      seq += words[j] + ' ';
    }
    grams.push(seq);
  }
  return grams;
}



function choice(somelist) {
  var i = Math.floor(Math.random()*somelist.length);
  return somelist[i];
}

// gets random element from a dictionary
function randomProperty(dict) {
    var keys = Object.keys(dict)
    var selection = dict[keys[ keys.length * Math.random() << 0]];
    return selection[selection.length * Math.random() << 0]
};


// let hehe = {'hi':['heheh'], 'maybe':['whatever', 'there']}

// console.log(randomProperty(hehe))



var ngrams = {};


//first, grab all of the dumb texts that I send. (they are anonymized). And add them to my ngrams dictionary.
//Because they are all seperate sentences, I split them into lists,
// and feed them thru the ngrammer individually.

for (var i = 0; i < myTexts.length; i++) {

  let textSplit = myTexts[i];
  ngrammerize(textSplit, 1);
  console.log(textSplit);
}

    // var text = 'A small difference from the concordance you might notice above is the use of hasOwnProperty() which is a universal object method in JavaScript that allows you to test if a variable is a property of the object or not. Last week, we said if (ngrams[gram] === undefined). Both are valid strategies.';

    // var textSplit = text.split(" "); 


function ngrammerize(textSplit, n) {
    // Look at all words of string
    for (var i = 0; i < textSplit.length - n; i++) {
      // Look at an ngram
      var gram = textSplit[i];
      // Look at the next charaacter
      var next = textSplit[i + n];
      // Is this a new one, make an empty array
      if (ngrams[gram] === undefined) {
        ngrams[gram] = [];
      }
      // Add the next character as a possible outcome
      ngrams[gram].push(next);
    }
};



// // Start with an arbitrary ngram
// console.log(ngrams[i])
var input = "There are certain ways to write a love song. Always, you can do this. Where do you want to go to eat?";

let output = [];

let inputSplit = input.split(" ");

console.log(inputSplit);


// // The final text
// var output = current;


const punctuation = ['.', ',', '!', '?']


// Predict and replace next word in the sentence.
for (var i = 0; i < inputSplit.length; i++) {
  
  let current = inputSplit[i];
  // set current to last entry if it inputSplit doesn't have punctuation in the last string.
  if (current.substring(current.length - 1) in punctuation === false) {
      current = output[inputSplit.length - 1];
    }




    
  if (ngrams.hasOwnProperty(current)) {
    // What are all the possible next tokens
    var possible = ngrams[current];
    // Pick one randomly
    var next = choice(possible);
    // Add to the output
    output.push(" " + next);
    // Get next - if it has a 
    // an ngram in the next iteration of the loop


  } else {
    // input this message for any dummies trying to use a too big worddd. 
      if (Math.random() < 0.05) {
        output.push("\n\n *** pick a different word ! this is too grownup = " + current + " ***\n\n");
      } else {
        output.push(randomProperty(ngrams))
      }
  }
}

document.getElementById('text').innerHTML = output.join(" ");









//adapted from dan shiffman & everest pipkin :) 