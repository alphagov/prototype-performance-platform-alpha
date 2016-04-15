google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');

  var rowsArray = [];

  console.dir(JSON.stringify(orgData))

  for (var i = orgData.length - 1; i >= 0; i--) {


    if(orgData[i]){

      // set thisOrg
      // var thisOrg = {v: orgData[i].id, f: orgData[i].title + '<br /><br /><em>'+orgData[i].format+'</em>'};

      // //set the parentOrg
      // var parentOrg = orgData[i].parent_organisations[0]
      // var parent = null
      // parentOrg ? parent = parentOrg.id : null

      //set the tip
      // var tip = orgData[i].format

      var thisOrg = String(orgData[i].name);
      var parentOrg = String(orgData[i].boss);
      // var tip = orgData[i].type;

      console.log(orgData[i])
      //set the array
      var orgArray = [
        thisOrg,
        parentOrg,
        'no tip yet'
      ]
      console.log(orgArray);
      rowsArray.push(orgArray)
    }

  }

  console.dir(JSON.stringify(rowsArray))


  data.addRows(rowsArray);

  // For each orgchart box, provide the name, manager, and tooltip to show.
  // data.addRows([
  //   [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'},
  //    '', 'The President'],
  //   [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'},
  //    'Mike', 'VP'],
  //   ['Alice', 'Mike', ''],
  //   ['Bob', 'Jim', 'Bob Sponge'],
  //   ['Carol', 'Bob', '']
  // ]);

  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {allowHtml:true, allowCollapse: true});
}