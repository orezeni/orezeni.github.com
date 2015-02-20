//----- code for okinawa

function loadLocalGovList() {
  console.log("load local gov list");

  $.getJSON("js/local-gov-year.js", function(json){
   $('#local-gov').empty();
   $('#local-gov').append('<optgroup label="市町村を選択">');
   $.each(json,function(i, value){
    $('#local-gov').append('<option value="' + value.ds +  '" data-years=[' + value.years  +']>'+ value.name + '</option>');
  });
   updateYearBox();
   loadData(selectedDataset(), selectedYear());

 }).fail(function(jqXHR, textStatus, errorThrown) {
  console.log("error" + textStatus);
  console.log("txt：" + jqXHR.responseText);
});
}

function updateYearBox() {
  console.log("update year box");
  $('#select-year').empty();
  $('#select-year').append('<optgroup label="年度を選択">');
  years = $('#local-gov').find(':selected').data("years");
  $.each(years, function(i, year) {
    $('#select-year').append('<option value="' + year + '">平成' +  (year - 1988) + '年度</option>');

  });
}

function selectedLocalGovName() {
  return jQuery('#local-gov :selected').text();
}
function selectedDataset(){
  return $('#local-gov').val();
}
function selectedYear(){
  return $('#select-year').val();
}


  var el = $('#local-gov-year-select');
  var loadData = function (dataset, year) {
    console.log("load data" + dataset + "," + year);

    $('#content-wrap,.db-tier').hide();
    $('#preloader').show();
    new OpenSpending.Aggregator({
      apiUrl: 'http://openspending.org/api',
      dataset: dataset,
      drilldowns: ['Category', 'Subcategory'],
      cuts: ['year:' + year],
      rootNodeLabel: 'Total',
      breakdown: 'Subcategory',
      callback: function(data) {
        $('#content-wrap,.db-tier').show();
        $('#preloader').hide();
        el.trigger('load', data)

      }
    });
  }

  $('#local-gov').change(function() {
    updateYearBox();
  });

  $('#local-gov, #select-year').change(function () {
    el.trigger('change');
    loadData(selectedDataset(), selectedYear());
  });



  $('.local-gov-name').text(selectedLocalGovName());

  try{
    loadData(selectedDataset(), selectedYear());
  }catch(e){
    console.log(e);
    console.log('load順序なおせ');
    setTimeout(function(){loadData(selectedDataset(), selectedYear());},1000)

  }


    // ---- code for okinawa