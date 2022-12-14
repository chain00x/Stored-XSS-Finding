chrome.tabs.onUpdated.addListener(function(tabId, props) {
  if (props.status == "complete") {
  // for the current tab, inject the "inject.js" file & execute it
  chrome.tabs.executeScript(
    tabId, 
    {file:"inject.js"}
  
  )};
});

var enable=false;
chrome.browserAction.onClicked.addListener(function (tab) {
 enable = enable ? false : true;
 if(enable){
  //turn on...
  chrome.browserAction.setIcon({ path: 'default.png' });
  chrome.browserAction.setBadgeText({ text: 'ON' });
  chrome.tabs.executeScript(null, { code: 'location.reload();' }); 
 }else{
  //turn off...
  chrome.browserAction.setIcon({ path: '1.png'});
  chrome.browserAction.setBadgeText({ text: 'OFF' });
 }
});
