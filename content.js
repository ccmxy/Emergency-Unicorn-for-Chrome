
function showImages() {
  var elements = document.getElementsByTagName('*');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (isImage(element)) {
      element.src = "http://67.media.tumblr.com/30b1b0d0a42bca3759610242a1ff0348/tumblr_nnjxy1GQAA1tpo3v2o1_540.jpg";
    }
    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;

        var replacedText = text.replace(/wild/gi, 'rainbow bright');

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}

function isImage(i) {
  return i instanceof HTMLImageElement;
}

// Message handler
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method === 'showImages') {
    showImages();
  }
});
