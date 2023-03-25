$(document).ready(function(){
    $("form[name='addeventform']").validate({
        rules:{
            titlename:{
                required:true,
            },
            desctext:{
                required:true,
            }
        },
        messages:{
            titlename:{
                required:"* Please enter title name"
            },
            desctext:{
                required:"* please enter desc"
            }
        }
    })
})