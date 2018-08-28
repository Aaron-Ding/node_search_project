
$(document).ready(function(){
    $("#nihahama").on("submit",function(){
        var item = $("#item");
        var name = $("#name")
        var todo = {item: item.val(),name: name.val()};
        $.ajax({
            type: 'POST',
            url:'/todo',
            data:todo,
            success: function(data){
                location.reload();
            }
        });
        return false;
    });

    $('li').on('click',function(){
        var item = $(this).text().replace(/ /g,'-');
        $.ajax({
            type: 'DELETE',
            url:'/todo/'+ item,
            success:function(){
                location.reload();
            }
        });
        return false;
    });
});


