

function AutoRefresh( t ) {
               setTimeout("location.reload(true);", t);
            }
/*
    $(document).ready(function(){
      refreshTable();
    });

    function refreshTable(){
        $('#tableHolder').load('/eanlist', function(){
           setTimeout(refreshTable, 5000);
        });
    }*/