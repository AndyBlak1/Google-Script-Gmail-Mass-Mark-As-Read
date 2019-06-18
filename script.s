function markPromosRead() {
  var searchString = 'label:unread category:promotions';
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
  var countThreads = GmailApp.search('label:unread category:promotions');
  
  if (countThreads.length > 0) {
    markPromosRead();
  }
  else {
    Logger.log('Script complete');  
  }
};
