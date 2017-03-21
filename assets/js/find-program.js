$( document ).ready(function() {

  google.maps.event.addDomListener(window, 'load', function() {
    initMap();
  });

  $('#programSelect').change(function(){ 
    initMap();
  })

  function initMap() {
    $('#panel').html('');
    $('#map-canvas').html('');

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: new google.maps.LatLng(35.1200549, -120.61598019999997),
      zoom: 6,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var panelDiv = document.getElementById('panel');

    var data = new MedicareDataSource;

    var view = new storeLocator.View(map, data, {
      geolocation: false,
      features: data.getFeatures()
    });

    new storeLocator.Panel(panelDiv, {
      view: view
    });

  }

});