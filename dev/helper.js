chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendRequest(tab.id, {method: 'getSelection'}, function (response) {
    var text = document.getElementById('text');
    text.value = response.data;
  });
});
