$(document).ready(function(){
    // Mask for fields
    var SPMaskBehavior = function (val) {
            var phoneFormat = "";
            if (val.replace(/\D/g, '').length === 11) {
                phoneFormat = '0 (000) 000-0000';
                var res = val.substring(2, 16);
                $('input#phone').val(res);
            } else {
                phoneFormat = '(000) 000-00009'
            }
            return phoneFormat;
        },
        spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            },
        };
    $('input#phone').mask(SPMaskBehavior, spOptions);

    // Tooltips for Validation
    $('.form-control').tooltipster({
        trigger:	'custom',
        onlyOne:	false,
        position:	"bottom-right",
        theme:		'tooltipster-punk',
        offsetY:	-4,
        animation:	'grow',
        updateAnimation: false
    });

    // Validation
    $(".next-btn").click(function(e){
        e.preventDefault();

        var current_fs, next_fs;

        var form = $("form");
        form.validate({
            errorPlacement: function (error, element) {
                $(element).tooltipster('update', $(error).text());
                $(element).tooltipster('show');
            },
            success: function (label, element) {
                $(element).tooltipster('hide');
            }
        });
        if (form.valid() === true){
            console.log(1);
            if ($('#step-1').is(":visible")){
                current_fs = $('#step-1');
                next_fs = $('#step-2');
            }

            next_fs.show();
            current_fs.hide();
        }
    });

    $('#when-go').datetimepicker({
        viewMode: 'months',
        minDate:  new Date(),
        format: 'MM/YYYY'
    });

    $('#part-about').load('parts/about.html');
    $('#part-ranking').load('parts/ranking.html');
    $('#part-accreditations').load('parts/accreditations.html');
    $('#part-pp').load('parts/pp.html');
    $('#part-complaint-resolution').load('parts/complaint-resolution.html');

});