/**
 * @extends storeLocator.StaticDataFeed
 * @constructor
 */
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

/**
 * @const
 * @type {!storeLocator.FeatureSet}
 * @private
 */
MedicareDataSource.prototype.FEATURES_ = new storeLocator.FeatureSet(
  // new storeLocator.Feature('Program-Residential', 'Residential')
);

/**
 * @return {!storeLocator.FeatureSet}
 */
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

/**
 * Joins elements of an array that are non-empty and non-null.
 * @private
 * @param {!Array} arr array of elements to join.
 * @param {string} sep the separator.
 * @return {string}
 */
MedicareDataSource.prototype.join_ = function(arr, sep) {
  var parts = [];
  for (var i = 0, ii = arr.length; i < ii; i++) {
    arr[i] && parts.push(arr[i]);
  }
  return parts.join(sep);
};

/**
 * Very rudimentary CSV parsing - we know how this particular CSV is formatted.
 * IMPORTANT: Don't use this for general CSV parsing!
 * @private
 * @param {string} row
 * @return {Array.<string>}
 */
MedicareDataSource.prototype.parseRow_ = function(row) {
  // Strip leading quote.
  if (row.charAt(0) == '"') {
    row = row.substring(1);
  }
  // Strip trailing quote. There seems to be a character between the last quote
  // and the line ending, hence 2 instead of 1.
  if (row.charAt(row.length - 2) == '"') {
    row = row.substring(0, row.length - 2);
  }

  row = row.split('","');

  return row;
};

/**
 * Creates an object mapping headings to row elements.
 * @private
 * @param {Array.<string>} headings
 * @param {Array.<string>} row
 * @return {Object}
 */
MedicareDataSource.prototype.toObject_ = function(headings, row) {
  var result = {};
  for (var i = 0, ii = row.length; i < ii; i++) {
    result[headings[i]] = row[i];
  }
  return result;
};


MedicareDataSource.prototype.sortByDistance_ = function(latLng, stores) {
  stores.sort(function(a, b) {
    return a.distanceTo(latLng) - b.distanceTo(latLng);
  });
};