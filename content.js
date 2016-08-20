var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
  //  if(element.nodeType = 1){
    //  var isImg = (element.nodeName.toLowerCase() === 'img');
      if(isImage(element)){
       alert(element.src);
     }
  //  }
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

function isImage(i) {
    return i instanceof HTMLImageElement;
}
