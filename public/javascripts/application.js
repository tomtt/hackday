// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
FlickrTag = $.klass({
  initialize: function(tag) {
    console.info("asddasa");
    var element = jQuery('<ul class="flickr_tag_photos" id="flickr_tag_photos_for_'+tag+'"></ul>');
    this.element.before(element);
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+tag+"&format=json&jsoncallback=?", function(data){ 
      $.each(data.items.slice(0,5), function(i, item) { 
        element.append(
          '<li>'+
            '<a href="'+item.link+'">'+
              '<img src="'+item.media.m.replace(/_m.jpg$/, ".jpg")+'" alt="'+item.title+'" />' +
            '</a>'+
          '</li>'
        );
      });
    });
  }
});

GithubProjectCommits = $.klass({
  initialize: function(user_id, repo) {
    var element = jQuery('<ul class="github_repositories" id="github_repositories_from_'+user_id+'"></ul>');
    this.element.before(element);
    element.before('<h4>Recent commits to github:</h4>');
    $.getJSON("http://github.com/api/v1/json/"+user_id+"/"+repo+"/commits/master?callback=?", function(data){ 
      $.each(data.commits, function(i, item) { 
        element.append(
          '<li>'+
             '<a href="'+item.url+'">'+
               item.message+
             '</a>'+
           '</li>'
        );
      });
    });
  }
});

TwitterSearch = $.klass({
  initialize: function(query) {
    var element = jQuery('<ul class="twitter_search" id="twitter_search_for_'+query+'"></ul>');
    this.element.after(element);
    $.getJSON("http://search.twitter.com/search.json?q="+query+"&callback=?", function(data){ 
      $.each(data.results, function(i, item) { 
        element.append(
          '<li class='+item.from_user+'>'+
             '<a href="http://twitter.com/'+item.from_user+'">'+
              item.from_user+
              '</a>: '+
               item.text+
           '</li>'
        );
      });
    });
  }
});
