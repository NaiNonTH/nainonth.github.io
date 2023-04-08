	var copyButton = document.querySelector('#copyButton');
	var textToCopy = document.querySelector('#textToCopy');

	copyButton.addEventListener('click', function() {
	var textarea = document.createElement('textarea');
	textarea.value = textToCopy.innerText;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
	alert('Copied to your Clipboard');
});