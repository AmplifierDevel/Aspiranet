function MedicareDataSource() {
  // silence is golden...
}


MedicareDataSource.prototype.getStores = function(bounds, features, callback) {
  var that = this;

  $.getJSON( "../../assets/data/program-data.json", function( data ) {
    var stores = that.parse_(data);
    callback(stores);
  });
};


MedicareDataSource.prototype.FEATURES_ = new storeLocator.FeatureSet(
  // new storeLocator.Feature('Program-Residential', 'Residential')
);


MedicareDataSource.prototype.getFeatures = function() {
  return this.FEATURES_;
};


MedicareDataSource.prototype.parse_ = function(json) {
  var stores = [];

  json.items.forEach(function(item){
    var features = new storeLocator.FeatureSet;
    // features.add(this.FEATURES_.getById('Program-Residential'));
    var position = new google.maps.LatLng(item.fields.location.lat,
                                          item.fields.location.lon);


    var store = new storeLocator.Store(item.sys.id, position, features, {
      title: item.fields.name,
      address: item.fields.hrsOfBusiness,
      hours: item.fields.hrsOfBusiness
    });
    stores.push(store);
  });
  
  return stores;
};


MedicareDataSource.prototype.sortByDistance_ = function(latLng, stores) {
  stores.sort(function(a, b) {
    return a.distanceTo(latLng) - b.distanceTo(latLng);
  });
};

storeLocator.FeatureSet.prototype.getById = function(featureId) {
  if (featureId in this.hash_) {
    return this.array_[this.hash_[featureId]];
  }
  return null;
};
