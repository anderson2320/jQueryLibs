(function(){
  /**
  * @author Anderson Rocha
  * Create dynamic search area
  * <div id="container">
  *   <input id="searchField"/>
  *   <div searchAttribute="..."></div>
  * </div>
  *
  * @param searchField CSSSelector Input field for search
  * @param searchAttribute String Attribute search 
  */
  $.fn.searchArea=function(searchField, searchAttribute){
    var container=$(this);
    container.find(searchField).keyup(function(){
        var value=$(this).val().toLowerCase()
        if(value!=""){
            container.find('['+searchAttribute+']').css({'display':'none'});
            container.find('['+searchAttribute+'*="'+value+'"]').css({'display':''});
            if(container.find('['+searchAttribute+'*="'+value+'"]').length>0){
                container.find('[notfound]').css({'display':'none'});
            }else{
                container.find('[notfound]').css({'display':''});
            }
        }else{
            container.find('['+searchAttribute+']').css({'display':''});
        }
    });
    container.find('[notfound]').css({'display':'none'});
  };
})(jQuery)
