var rightNow = new Date();

if(rightNow.getHours() < workStart || rightNow.getHours() > workEnd){
	

	console.log("home is so great");
}
else {
	var topbar = Document.createElement("div");
	topbar.text("HAHFHAH");

	


	console.log("get back to work");
}


// var html =
//     "<p>This is a test.</p>" +
//     "<form><input type='text' value='test value'></form>" +
//     "<p class='testing test'>Testing here too</p>";
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
  textNode.nodeValue = textNode.nodeValue.replace(/\w+\b/gi, "TEST");
}