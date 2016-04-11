var google = require('../assets/javascripts/google-loader.js').google;


google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');

  // For each orgchart box, provide the name, manager, and tooltip to show.
  data.addRows([
    [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'},
     '', 'The President'],
    [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'},
     'Mike', 'VP'],
    ['Alice', 'Mike', ''],
    ['Bob', 'Jim', 'Bob Sponge'],
    ['Carol', 'Bob', '']
  ]);

  var fakeDiv = '<div></div>'

  // Create the chart.
  var chart = new google.visualization.OrgChart(fakeDiv('chart_div'));

  // Draw the chart, setting the allowHtml option to true for the tooltips.
  module.exports = chart.draw(data, {allowHtml:true});
}

