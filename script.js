function markPromosRead(stringParam) {
  var searchString = stringParam;
  var resultThreads = GmailApp.search(searchString);
  
  for (var i = 0; i < resultThreads.length; i++) {
    resultThreads[i].markRead();
    
    if (i % 10 == 0) {
      Logger.log('Now on #' + i);
    }
  }
  repeater();
};

function repeater() {
  var searchString = 'label:unread category:promotions';
  var countThreads = GmailApp.search(searchString);
  
  if (countThreads.length > 0) {
    markPromosRead(searchString);
  }
  else {
    Logger.log('Script complete');  
  }
};
