chrome.tabs.onUpdated.addListener(function(tabId, props) {
  if (props.status == "complete") {
  // for the current tab, inject the "inject.js" file & execute it
  chrome.tabs.executeScript(
    tabId, 
    {file:"inject.js"},
    function(res){
      if(res.toString()=='true'){
        chrome.browserAction.setIcon({ path: '1.png'});
        chrome.browserAction.setBadgeText({ text: 'XSS!' });
      }
    }
  
  )};
});

var enable=false;
chrome.browserAction.onClicked.addListener(function (tab) {
  //turn on...
  chrome.browserAction.setIcon({ path: 'default.png' });
  chrome.browserAction.setBadgeText({ text: 'FINDING' });
  chrome.tabs.executeScript(null, { code: 'location.reload();' }); 
 });
