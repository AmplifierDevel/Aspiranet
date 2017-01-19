function MedicareDataSource() {
  // silence is golden...
}


MedicareDataSource.prototype.getStores = function(bounds, features, callback) {
  var that = this;

  $.getJSON( "../../assets/data/program_data.json", function( data ) {

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
  var stores = [],
      programs = [],
      uniquePrograms = [],
      filterByProgram = false,
      filterByAge = false;

    if(document.getElementById('programSelect').value != "") {
       filterByProgram = true;
    }
    if(document.getElementById('ageSelect').value != "") {
       filterByAge = true;
    }

  json.items.forEach(function(item){

    var features = new storeLocator.FeatureSet;
    // features.add(this.FEATURES_.getById('Program-Residential'));
    var position = new google.maps.LatLng(item.fields.location.lat,
                                          item.fields.location.lon);
  

    var store = new storeLocator.Store(item.sys.id, position, features, {
      title: item.fields.name,
      address: item.fields.addressAsText,
      misc: `<strong>Available Services:</strong><br/>` + 
      item.fields.programAndAgeGroupAsText,
      web: item.fields.phoneText
    });


    // Add all programs
    if (item.fields.program) {
    addAllItemsToArray(item.fields.program, programs);
    }
    // remove dupplicates
    $.each(programs, function(i, el){
      if($.inArray(el, uniquePrograms) === -1) uniquePrograms.push(el);
    });

    if (filterByProgram && !item.fields.program.includes(document.getElementById('programSelect').value)){
      return;
    }

    if (item.fields.ageLevel) {
      if (filterByAge && !item.fields.ageLevel.includes(document.getElementById('ageSelect').value)){
        return;
      }
    }

    stores.push(store);      

  });

    if ($('#programSelect option').length == 1){
      populateArray(uniquePrograms.sort(), $('#programSelect'));      
    }
  
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


function populateArray(array, selectElement) {
      var opt = document.createElement("option");
       opt.value = "";
       opt.innerHTML = "All";
    selectElement.append(opt);

    // Populate select
    array.forEach(function(item){
       var opt = document.createElement("option");
       opt.value = item;
       opt.innerHTML = item; // whatever property it has

       // then append it to the select element
       selectElement.append(opt);
    });
};

function addAllItemsToArray(items, array){
  items.forEach(function(item){
      array.push(item);
    });
};
