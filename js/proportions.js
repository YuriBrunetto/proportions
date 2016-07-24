$(function () {

    var w = 0;
    var h = 0;

    $("#form-set").on("submit", function(e) {
        e.preventDefault();

        $(".overlay").show(0, function() {
            $(this).addClass("active");
        });

        w = $("input[name='width']").val();
        h = $("input[name='height']").val();

        proportion = w / h;
    });

    $("#set-reset").click(function() { $("#form-set")[0].reset(); });

});
