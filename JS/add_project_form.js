$(document).ready(function() {

  $("#register").on("click", function() {
    $("#hide").show();
  })

  $("#hide").hide();

  $("input#taskinput").keyup(function() {
      var value = $(this).val();
      $("#taskname").val(value);
    })
    .keyup();

  $("#save").on("click", function() {

    $("input#taskname").val(function() {
      var value = $(this).val();
      $("input#sdate").val(function() {
        var sdate = $(this).val();
        $("input#sdate").val(function() {
          var sdate = $(this).val();
          $("#sel1 option:selected").val(function() {
            var prio = $(this).val();

            $("table").append('<tr><td class="p-name"><a href="#">' + value +
              '</a><br><small>Created ' + sdate + +prio +
              '</small></td><td class="p-team"><a href="#"><img alt="image" src="../images/avatar1.png"></a></td><td class="p-progress"><div class="progress progress-xs"><div style="width: 10%;" class="progress-bar progress-bar-success"></div></div><small>10% Complete</small></td><td><span class="label label-default">low</span></td><td><a href="#" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a><a href="#" class="btn btn-info btn-xs"><i class="fas fa-pencil-alt"></i> Edit </a><a href="#" class="btn btn-danger btn-xs"><i class="far fa-trash-alt"></i> Delete </a></td></tr>');
          })
        })
      })
    })
    $("#id02").hide();

  })

  $("a[href='#page-top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(document).ready(function(){
      $("#subproject2").append("<tr>" +
        "<td>" + 'Neue Homepage' + "</td>" +
        "<td>" + 'ABB' + "</td>" +
        "<td>" + '21.01.2018' + "</td>" +
        "<td>" + '30.06.2018' + "</td>" +
        "<td>" +
        '<a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> Anzeigen </a>' + " " +
        '<a href="#" class="btn btn-info btn-xs"><i class="fas fa-pencil-alt"></i> Bearbeiten </a>' +  " " +
        '<a href="#" class="btn btn-danger btn-xs"><i class="far fa-trash-alt"></i> Löschen </a>' + "</td>" +
        "</tr>");

        $("#subproject2").append("<tr>" +
          "<td>" + 'Backend überarbeiten' + "</td>" +
          "<td>" + 'Credit Suisse' + "</td>" +
          "<td>" + '11.04.2018' + "</td>" +
          "<td>" + '20.07.2018' + "</td>" +
          "<td>" +
          '<a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> Anzeigen </a>' + " " +
          '<a href="#" class="btn btn-info btn-xs"><i class="fas fa-pencil-alt"></i> Bearbeiten </a>' +  " " +
          '<a href="#" class="btn btn-danger btn-xs"><i class="far fa-trash-alt"></i> Löschen </a>' + "</td>" +
          "</tr>");
    });






  $(document).ready(function(){
    $("#subproject").on("click", function(){
      var selectedVal1 = $("#user").val();
      var selectedVal2 = $("#sel1").val();
      var selectedVal3 = $("#startdatum").val();
      var selectedVal4 = $("#enddatum").val();
      $("#subproject2").append("<tr>" +
        "<td>" + selectedVal1 + "</td>" +
        "<td>" + selectedVal2 + "</td>" +
        "<td>" + selectedVal3 + "</td>" +
        "<td>" + selectedVal4 + "</td>" +
        "<td>" +
        '<a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> Anzeigen </a>' + " " +
        '<a href="#" class="btn btn-info btn-xs"><i class="fas fa-pencil-alt"></i> Bearbeiten </a>' +  " " +
        '<a href="#" class="btn btn-danger btn-xs"><i class="far fa-trash-alt"></i> Löschen </a>' + "</td>" +
        "</tr>");
    });
  })

})
