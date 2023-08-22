export const copyToClipBoardNotInput = (text) => {
  // Create an input element
  var copyText = document.createElement("input");

  // Set the type attribute to "text"
  copyText.type = "text";
  copyText.value = text;

  // Append the input element to the body of the document
  document.body.appendChild(copyText);

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  document.body.removeChild(copyText);
};
