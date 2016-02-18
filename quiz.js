// create object to pass argument to function
var tree = {
	height: "",
	treeChar: ""
}



// functions to return user input value when event handlers trigger
document.getElementById("height").onkeyup = function() {
	tree.height = document.getElementById("height").value;
}

document.getElementById("treeChar").onkeyup = function() {
	tree.treeChar = document.getElementById("treeChar").value;
}

// button to create tree in console
document.getElementById("treeButt").onclick = function() {
	if(tree.height.length < 1) {
		alert("Enter a number");
	}
	if(tree.treeChar.length < 1 || tree.treeChar.length > 1) {
		alert("Enter a single character");
	}
	treeGrower(tree);
	// console.log(tree.height, tree.treeChar)

}

//write for loop that displays char adding two each time
function treeGrower(treeObject) {
	var spaces = " ";
	var myTree;
	var characters = tree.treeChar;
	for (var i = 0; i < treeObject.height; i++) {
		myTree = spaces.repeat(treeObject.height - i);
		myTree += characters; 
		characters += tree.treeChar + tree.treeChar;
		console.log(myTree);

	}
}




// Create a tree function that should build a pine tree out of a character in the browser console. It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

// Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************
