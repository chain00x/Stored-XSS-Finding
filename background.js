var enable=false;
chrome.browserAction.onClicked.addListener(function (tab) {
 enable = enable ? false : true;
 if(enable){
  //turn on...
  chrome.browserAction.setIcon({ path: 'default.png' });
  chrome.browserAction.setBadgeText({ text: 'ON' });
  chrome.tabs.executeScript(null, { file: 'inject.js' }); 
 }else{
  //turn off...
  chrome.browserAction.setIcon({ path: '1.png'});
  chrome.browserAction.setBadgeText({ text: '' });
 }
});
