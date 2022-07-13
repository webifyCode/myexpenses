$(document).ready( function () {
  $.getJSON('data.json', function(data) {
    var bars = '';
    
    $.each(data, function(key, value) {
      bars += '<div class="day"><span> $' +value.amount + '</span><div id="' + value.day + '" style="height:' + value.amount * 2.5 + 'px;"></div>'
      bars += '<span>' + value.day + '</></div>'
      
      
    });
    
    $("#bars").append(bars);
    
  });
  
  
  
});
