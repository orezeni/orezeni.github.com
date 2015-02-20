yepnope({
  load: [
    // 'http://wheredoesmymoneygo.org/wp-content/themes/wdmmg/wdmmg.css',
    'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.6/themes/ui-lightness/jquery-ui.css',
    'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js',
    '/js/libs/base64.js',
    '/js/libs/underscore.js',
    '/js/libs/raphael-min.js',
    '/js/aggregator.js',
    '/css/dailybread.css',
    '/js/setting.js?20120707',
    '/js/dailybread.js?20120707',
    '/js/dropdown-select-gov-year.js'
  ],
  complete: function() {
    $('#preloader .txt').html('loading data');

    function iconLookup(name) {
      var style = OpenSpending.Styles.Cofog[name];
      if (style != undefined) {
        return style['icon'];
      }
      return 'icons/unknown.svg';
    }

    function selectedLocalGovName() {
      return jQuery('#local-gov :selected').parent().attr('label');
    }

    function selectedDataset() {
      return jQuery('#local-gov').val().split(',')[0];
    }

    function selectedYear() {
      return jQuery('#select-year').val(); //.split(',')[1];
    }

    function setup() {
      var $ = jQuery;

      var dailyBread = new OpenSpending.DailyBread($('#dailybread'));
      dailyBread.setIconLookup(iconLookup);
      OpenSpending.renderDependentTypes(dailyBread);

      var loadData = function (dataset, year) {
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
            dailyBread.setDataFromAggregator(data, ['unknown']);
            dailyBread.draw();
          }
        });
      }

      $('#local-gov, #select-year').change(function () {
        $('.local-gov-name').text(selectedLocalGovName());
        loadData(selectedDataset(), selectedYear());
      });

      $('.local-gov-name').text(selectedLocalGovName());
      loadData(selectedDataset(), selectedYear());
    }

    jQuery(setup);
    loadLocalGovList();
  }
});
