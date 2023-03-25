

function scrape(){
  chatWindow = document.getElementsByTagName("yt-live-chat-text-message-renderer");
  msgs = [];
  ix = 0;
  while (ix < chatWindow.length){
    chat = chatWindow[ix];
    tm = ch.children[1].children[0].innerText;
    content = ch.children[1].children[2].innerText;
    user = ch.children[1].children[1].children[1].innerText;
    msg = {"time" : tm, "content" : content, "user" : user};
    msgs.push(msg);
    ix += 1;
  }
  
  msgList = {"messages" : msgs};
  msgText = JSON.stringify(msgList);
  
  var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return textFile;
  };
  return makeTextFile(msgText);
}
