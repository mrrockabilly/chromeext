var rightNow = new Date();
var quoteArray = ["Life is like a roller coaster, live it, be happy, enjoy life.", "I like people that enjoy life, 'cause I do the same.", "Simply enjoy life and the great pleasures that come with it.", "Take a step back, evaluate what is important, and enjoy life.", "Positive anything is better than negative nothing.", "Believe that life is worth living and your belief will help create the fact."]

console.log(testG);

var randNum = Math.floor(Math.random()*6);
var randomQuote = quoteArray[randNum];

if(rightNow.getHours() < workStart || rightNow.getHours() > workEnd){
	console.log("get back to work");
	console.log("home js has hours as " + workStart +"-" + workEnd);
	textReplacer(randomQuote);
}
else {
		
		console.log("workrelated + work hours");
		console.log("workStart is " + workStart);
}


function textReplacer(newtext){
	var frag = document.createDocumentFragment();
	var body = document.body;
	var node, next;

	// Turn the HTML string into a DOM tree
	// body.innerHTML = html;

	// Walk the dom looking for the given text in text nodes
	walk(body);

	// Insert the result into the current document via a fragment
	node = body.firstChild;
	while (node) {
	  next = node.nextSibling;
	  frag.appendChild(node);
	  node = next;
	}
	document.body.appendChild(frag);

	// Our walker function
	function walk(node) {
	  var child, next;

	  switch (node.nodeType) {
	    case 1:  // Element
	    case 9:  // Document
	    case 11: // Document fragment
	      child = node.firstChild;
	      while (child) {
	        next = child.nextSibling;
	        walk(child);
	        child = next;
	      }
	      break;
	    case 3: // Text node
	      handleText(node);
	      break;
	  }
	}

	function handleText(textNode) {
	  textNode.nodeValue = textNode.nodeValue.replace(/[A-Z][^.]*\./gi, newtext);
	}
}