var rightNow = new Date();
console.log("hello!");

console.log(testG);

var quoteArray = ["No one ever drowned in sweat.", "I’m a greater believer in luck, and I find the harder I work the more I have of it.", "A dream doesn’t become reality through magic; it takes sweat, determination and hard work.", "Hard work keeps the wrinkles out of the mind and spirit.", "The highest reward for man’s toil is not what he gets for it, but what he becomes by it.", "Hard work helps. It has never killed anyone.", "Pleasure in the job puts perfection in the work.", "Nothing worth having comes easy.", "Hard work beats talent when talent doesn't work hard."]

var randNum = Math.floor(Math.random()*8);
var randomQuote = quoteArray[randNum];

if(rightNow.getHours() > workStart && rightNow.getHours() < workEnd){
	console.log(" has hours as " + workStart +"-" + workEnd);
	console.log("social.js");
	textReplacer(randomQuote);
	
	}
else {

	console.log("social at home / non-work hours");
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
	  //frag.appendChild(node);
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