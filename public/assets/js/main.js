let input = new Object();
let button = new Object();
let view = new Object();

let formData = new Object();

window.onload = () => {

    $("input[type='checkbox']").change(function(e) {
        if (e.target.checked) {
            $(".checkbox-container").each(function() {
                $(this).removeAttr("id")
            });
            e.target.parentElement.parentElement.id = "selected";
            id = e.target.id.replace("s5-degree-", "");
            formData['degree_renovation'] = id;
            stage(6);

        } else {
            $(".checkbox-container").each(function() {
                // For each link, set its id = its data-id
                $(this).removeAttr("id")
            });

        }
    });
    /*********price slider***************/
    $("#slider").slider({
        animate: true,
        value: 1,
        min: 5,
        max: "100",
        step: 10,
        slide: function(event, ui) {
            update(1, ui.value); //changed
        }
    });
    //Added, set initial value.
    $("#amount").val(5);
    update();
    //changed. now with parameter
    function update(slider, val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1 ? val : $("#amount").val();
        var $duration = slider == 2 ? val : $("#duration").val();
        $("#amount").val($amount);
        $("#amount-label").text($amount);
        formData['estimated_amount'] = $amount;
        $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $amount + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
    }
    /*********End price slider***************/
    /************show build & renovate**********/
    $('#spaces a').click(function(e) {
        $('.' + e.target.id).toggle();
    })
    $('#spaces .btn').click(function(e) {
        var con = e.target.id;
        if (con.indexOf('close') !== -1) {
            $('.count').text(0);
            con = con.replace('-close', '');
            formData[con] = 0;
            $("." + con).toggle();
        } else {
            con = con.replace('-done', '');
            formData[con] = $('.count').text();
            $("." + con).toggle();
        }
    })
    $(document).on('click', '.plus', function() {
        var ct = $(this).siblings('.count')[0].id;
        $("#" + ct).text(parseInt($("#" + ct).text()) + 1);
    });
    $(document).on('click', '.minus', function() {
        var ct = $(this).siblings('.count')[0].id;
        $("#" + ct).text(parseInt($("#" + ct).text()) - 1);
        if ($("#" + ct).text() == -1) {
            $("#" + ct).text(0)
        }
    });
    $('.close-contractor').click(function() {
        $('#fixed-ele-container').toggle();
        stage(3)
    })
    /************end show build & renovate**********/

    button['space_type_0'] = document.getElementById("space-type-0");
    button['space_type_1'] = document.getElementById("space-type-1");

    button['sub_stage_5'] = document.getElementById("sub-stage-5");
    button['sub_stage_6'] = document.getElementById("sub-stage-6");
    button['sub_stage_7'] = document.getElementById("sub-stage-7");

    button['back_stage_2'] = document.getElementById("back-stage-2");
    button['next_stage_2'] = document.getElementById("next-stage-2");
    button['back_stage_3'] = document.getElementById("back-stage-3");
    button['next_stage_3'] = document.getElementById("next-stage-3");
    button['back_stage_8'] = document.getElementById("back-stage-8");
    button['next_stage_8'] = document.getElementById("next-stage-8");
    button['back_stage_9'] = document.getElementById("back-stage-9");
    button['next_stage_9'] = document.getElementById("next-stage-9");
    button['back_stage_10'] = document.getElementById("back-stage-10");
    button['next_stage_10'] = document.getElementById("next-stage-10");
    button['next_stage_11'] = document.getElementById("next-stage-11");
    button['next_stage_4'] = document.getElementById("next-stage-4");

    button['view_stage_4'] = document.getElementById("view-stage-4");
    button['view_stage_5'] = document.getElementById("view-stage-5");

    button['degree-renovation-0'] = document.getElementById("s5-degree-0");
    button['degree-renovation-1'] = document.getElementById("s5-degree-1");
    button['degree-renovation-2'] = document.getElementById("s5-degree-2");
    button['degree-renovation-3'] = document.getElementById("s5-degree-3");
    
    button['want-connection'] = document.getElementById("s6-want-connection");
    button['no-connection'] = document.getElementById("s6-no-want-connection");
    button['structural-changes'] = document.getElementById("s6-structural-changes");
    button['no-changes'] = document.getElementById("s6-structural-changes");
    button['contacted-before'] = document.getElementById("s6-contacted-before");
    button['no-connected'] = document.getElementById("s6-no-contacted-before");

    view['stage_1'] = document.getElementById("stage-1");
    view['stage_2'] = document.getElementById("stage-2");
    view['stage_3'] = document.getElementById("stage-3");
    view['stage_4'] = document.getElementById("stage-4");
    view['stage_5'] = document.getElementById("stage-5");
    view['stage_6'] = document.getElementById("stage-6");
    view['stage_7'] = document.getElementById("stage-7");
    view['stage_8'] = document.getElementById("stage-8");
    view['stage_9'] = document.getElementById("stage-9");
    view['stage_10'] = document.getElementById("stage-10");
    view['stage_11'] = document.getElementById("stage-11");

    button['space_type_0'].onclick = () => {
        formData['space_type'] = 0;
        document.getElementById('wellcome').style.display = "none";
        progress(1);
        stage(2);
        formData['type'] = "residence";

    }

    button['space_type_1'].onclick = () => {
        formData['space_type'] = 1;
        document.getElementById('wellcome').style.display = "none";
        progress(1);
        stage(2);
        formData['type'] = "commercial";

    }

    button['back_stage_2'].onclick = () => {
        progress(0);
        stage(1);
    }
    button['next_stage_2'].onclick = () => {
        if (!$('#s2-address').val()) {
            $('#s2-address-err').show()
        } else if (!$('#s2-zip').val()) {
            $('#s2-zip-err').show()
        } else {
            $('#s2-address-err').hide()
            $('#s2-zip-err').hide()
            document.getElementsByClassName('image-container')[0].style.backgroundImage = "url('assets/img/1.jpeg')";

            stage(3);
        }

    }

    button['back_stage_3'].onclick = () => {

        progress(1)
        stage(2);
    }
    button['next_stage_3'].onclick = () => {
        stage(8);
    }

    button['view_stage_4'].onclick = () => {
        stage(4);
    }
    button['view_stage_5'].onclick = () => {
        stage(5);
    }

    button['next_stage_4'].onclick = () => {

        document.getElementById('collapseOne').className += 'collapse';
        stage(3);
    }

    button['sub_stage_5'].onclick = () => {
        stage(6);
    }

    button['sub_stage_6'].onclick = () => {
        stage(7);
    }

    button['sub_stage_7'].onclick = () => {
        stage(3);
    }

    button['back_stage_8'].onclick = () => {
        stage(3);
    }
    button['next_stage_8'].onclick = () => {
        document.getElementsByClassName('image-container')[0].style.backgroundImage = "url('assets/img/4.jpeg')";

        stage(9);
    }

    button['back_stage_9'].onclick = () => {
        progress(3)
        stage(8);
    }
    button['next_stage_9'].onclick = () => {
        document.getElementsByClassName('image-container')[0].style.backgroundImage = "url('assets/img/2.jpeg')";

        progress(3)
        stage(10);
    }

    button['back_stage_10'].onclick = () => {
        stage(8);
    }
    button['next_stage_10'].onclick = () => {
        document.getElementsByClassName('image-container')[0].style.backgroundImage = "url('assets/img/3.jpeg')";

        stage(11);
    }

    button['degree-renovation-0'].onclick = () => {
        formData['degree_renovation'] = 0;
        stage(6);
    }
    button['degree-renovation-1'].onclick = () => {
        formData['degree_renovation'] = 1;
        stage(6);
    }
    button['degree-renovation-2'].onclick = () => {
        formData['degree_renovation'] = 2;
        stage(6);
    }
    button['degree-renovation-3'].onclick = () => {
        formData['degree_renovation'] = 3;
        stage(6);
    }

    button['next_stage_11'].onclick = () => {
        getFormData();
    }
    button['next_stage_10'].onclick = () => {
        stage(11);

    }

    resetContainers();
    stage(1);



    button['want-connection'].onclick = () => {
        formData['want_connection']=1;

    }
    button['no-connection'].onclick = () => {
        formData['want_connection']=0;
    }
    button['structural-changes'].onclick = () => {
        formData['structural_change']=1;
    }
    button['no-changes'].onclick = () => {
        formData['structural_change']=0;

    }
    button['contacted-before'].onclick = () => {
        formData['contacted_before']=1;
    }
    button['no-connected'].onclick = () => {
        formData['contacted_before']=0;
    }
}

function stage(stageNo) {
    //console.log(stageNo);
    const otherStages = [4, 5, 6, 7];

    if (otherStages.indexOf(stageNo) != -1)
        show(document.getElementById("fixed-ele-container"));
    else
        resetContainers();

    if (view['stage_' + stageNo])
        show(view['stage_' + stageNo]);
}

function hide(el) {
    el.style.display = "none";
    $('.wizard-container').hide();
}

function show(el) {
    //console.log(el);
    if (el.id == "stage-1") {
        $('.wizard-container').show(function() {
            $(el).slideDown(1000);
        });
    } else {
        $('.wizard-container').show(1000, function() {
            $(el).slideDown(1000);

        });
    }
}

function resetContainers() {
    let containers = document.getElementsByClassName("form-sub-container");
    for (i = 0; i < containers.length; i++) {
        containers[i].style.display = "none";
    }
    document.getElementById("fixed-ele-container").style.display = "none";
}

function getFormData() {
    //stage 2 inputs
    console.log("form data");
    formData['address'] = document.getElementById("s2-address").value;
    formData['zip'] = document.getElementById("s2-zip").value;
    formData['area'] = document.getElementById("s2-area").value;
    formData['news'] = document.getElementById("s2-news").value;

    //stage 4 inputs

    formData['interior_finishes'] = Number(document.getElementById("s4-interior-finishes").checked);
    formData['art_selection'] = Number(document.getElementById("s4-art-selection").checked);
    formData['style_guidance'] = Number(document.getElementById("s4-style-guidance").checked);
    formData['furniture_selection'] = Number(document.getElementById("s4-furniture-selection").checked);

    //stage 6 inputs

    // formData['want_connection'] = Number(document.getElementById("s6-want-connection").checked);
    // formData['structural_change'] = Number(document.getElementById("s6-structural-changes").checked);
    // formData['contacted_before'] = Number(document.getElementById("s6-contacted-before").checked);

    //stage 7 inputs

    formData['entire_location'] = document.getElementById("s7-entire-location").value;
    formData['living_rooms'] = document.getElementById("s7-living-rooms").innerText;
    formData['bed_rooms'] = document.getElementById("s7-bed-rooms").innerText;
    formData['dining_rooms'] = document.getElementById("s7-dining-rooms").innerText;
    formData['kitchens'] = document.getElementById("s7-kitchens").innerText;
    formData['bathrooms'] = document.getElementById("s7-bathrooms").innerText;
    formData['entryways'] = document.getElementById("s7-entryways").innerText;
    formData['offices'] = document.getElementById("s7-offices").innerText;
    formData['kids'] = document.getElementById("s7-kids").innerText;
    formData['outdoor'] = document.getElementById("s7-outdoor").innerText;
    formData['phone'] = document.getElementById("s2-phone").value;

    //stage 8 input

    formData['project_info'] = document.getElementById("s8-project-info").value;

    //stage 9 input

    //formData['estimated_amount'] = document.getElementById("s9-estimated-amount").value;
    console.log(formData);
    /*$.ajax({
        url: "form",
        type: "post",
        data: formData,
        success: function(data) {
            //console.log(data);
            stage(12)
        }
    })*/
}


/***************progress bar handling*****************/
function progress(n) {
    var title = ["CREATE A PROJECT", "LOCATION DETAILS", "SCOPE OF WORK", "THANK YOU", "FINAL DETAILS"];
    document.getElementById('form-step-title').innerText = title[n];
    if (n == 0) {
        var elem = document.getElementById("myBar");
        elem.style.width = "25%";
    } else if (n == 1) {
        var elem = document.getElementById("myBar");
        elem.style.width = "50%";
    } else if (n == 2) {
        var elem = document.getElementById("myBar");
        elem.style.width = "75%";
    } else {
        var elem = document.getElementById("myBar");
        elem.style.width = "100%";
    }
    /*var i = 0;
    function move() {
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    }*/
}