var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search/',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true
    }, 
    success: function(data) {
      callback(data.items);
    },
    error: function() {
      console.log('failure');
    }
  });
};

window.searchYouTube = searchYouTube;
