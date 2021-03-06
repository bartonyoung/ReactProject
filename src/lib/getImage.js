const getImage = function(activityName) {
  var params = {
    q: activityName,
    count: '1',
    offset: '0',
    mkt: 'en-us',
    safeSearch: 'Moderate',
  };
      
  $.ajax({
    url: 'https://api.cognitive.microsoft.com/bing/v5.0/images/search?' + $.param(params),
    beforeSend: function(xhrObj){
      xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key','91f259f190b74befb353607298bb073f');
    },
    type: 'GET'
  })
  .done((data) => {
    this.setState({imageURL: data.value[0].contentUrl}); // If ever a smaller version of the image is needed, use value[0].thumbnailUrl
  })
  .fail(function() {
      alert('error');
  });
};