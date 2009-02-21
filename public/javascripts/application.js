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