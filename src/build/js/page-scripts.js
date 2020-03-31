

var colunas;
let oldModal = null;
let slider;
let monitoriaSlider;
let abasSlider;




function showModal(id) {
    oldModal = id;
    let allmodals = document.getElementsByClassName('modal');
    for (var i = 0; i < allmodals.length; i++) {
        if (allmodals[i].classList.contains('is-open')) {
            console.log('oldModal: ' + allmodals[i].id);
            oldModal = allmodals[i].id;
        }
    }
    MicroModal.show(id);
    document.querySelectorAll('.tippy-popper').forEach(popper => {
        popper._tippy.hide();
    });

}

function toggleModal(newId) {
    MicroModal.close(oldModal);
    MicroModal.show(newId);

    document.querySelectorAll('.tippy-popper').forEach(popper => {
        popper._tippy.hide();
    });

    oldModal = newId;
}



$(document).ready(function () {
    if (typeof MicroModal !== 'undefined')
        MicroModal.init({
            onShow: modal => console.info(`${modal.id} is shown`), // [1]
            onClose: modal => console.info(`${modal.id} is hidden`), // [2]
            openTrigger: 'data-custom-open', // [3]
            closeTrigger: 'data-custom-close', // [4]
            disableScroll: true, // [5]
            disableFocus: false, // [6]
            awaitOpenAnimation: false, // [7]
            awaitCloseAnimation: false, // [8]
            debugMode: true // [9]
        });

    
    $('.container-login .forgotLink').click(function(){
       $('.container-login').removeClass('active')
       $('.container-forgot').addClass('active')

    })
    $('.container-forgot .btn').click(function(){
       
       $('.notification').addClass('active')
       
    })
    
    $('.notification').click(function(){ 
        $('.container-forgot ').removeClass('active')
        $('.container-reset-password').addClass('active')
        
    })
    
    $('.container-reset-password .btn').click(function(){
       
        $('.container-reset-password').removeClass('active')
        $('.container-finish').addClass('active')
      
       
    })

    $('.container-finish .btn').click(function(){
       
        $('.container-finish').removeClass('active')
        $('.container-login').addClass('active')
    
      
       
    })




    $(".btn-group__btn__left").click(function () {
        $(this).parent().removeClass("toggle");
    });
    $(".btn-group__btn__right").click(function () {
        $(this).parent().addClass("toggle");
    });

    $(".btn-overlay").click(function () {
        $(this).toggleClass("active");
        $('.mini-chat').toggleClass("active");
    });

    $("#new-flow").click(function () {
        $(".hidden").removeClass("hidden");
        $(".main__body__empty-state").addClass("hidden");
    });

    //channel-group
    $(".channel-group__item").click(function () {
        $(this).toggleClass("active");
    });
    //modal days
    $(".days-container__days-item").click(function () {
        $(this).toggleClass("active");

    });


    

    $('.btn-add-answer').click(function () {
        $('.constructor__container-start__add-answer').addClass('active');
    })
    $('.constructor__container-start__conect__select').click(function () {
        $(this).toggleClass('active');


        $('.constructor__container-start__conect__select__options').toggleClass('active');
    })

    $('.constructor__container-start__add-answer__header__close').click(function () {
        $('.constructor__container-start__add-answer').removeClass('active');

    })

    $('.option-a').click(function () {
        $(this).removeClass('active');
        $('.option-b').removeClass('active');
        $(this).addClass('active');
        $('.constructor__container-start__conect__select__options__content-fluxos').removeClass('active');
        $('.constructor__container-start__conect__select__options__content-blocks').addClass('active');


    })

    $('.option-b').click(function () {
        $(this).removeClass('active');
        $('.option-a').removeClass('active');
        $(this).addClass('active');
        $('.constructor__container-start__conect__select__options__content-blocks').removeClass('active');
        $('.constructor__container-start__conect__select__options__content-fluxos').addClass('active');
    })

    $('.constructor__container-start__conect__select__options__content-blocks__add-block').click(function () {
        $(this).css('display', 'none');
        $('.list-drop--constructor-block').addClass('active');

    })

    $('.list-drop__close__icon').click(function () {
        $('.constructor__container-start__conect__select__options__content-blocks__add-block').css('display', 'flex');
        $('.list-drop--constructor-block').removeClass('active');


    })

    $('#start .audio').click(function () {
        $('.container-select').removeClass('active');
        $('.container-drag-drop').addClass('active');
    })




    //radio group dashboard fluxos
    $('input[name="radio"]').on('change', function (e) {

        var radio = e.target.value;
        if (radio === 'radio-1') {
            $('.table-card--flows-in').addClass('active');
            $('.table-card--flows-out').removeClass('active');
        }

        if (radio === 'radio-2') {
            $('.table-card--flows-out').addClass('active');
            $('.table-card--flows-in').removeClass('active');
        }
    });
    //Pagina construção do fluxo
    $('.constructor__content-menu__menu').click(function () {
        $(this).removeClass('active');
        $('.constructor__content-menu__menu-open').addClass('active');
        $('.container-blocks').addClass('active');
    });

    $('.opener').click(function () {
        $('.container-blocks').removeClass('active');
        $('.constructor__content-menu__menu-open').removeClass('active');
        $('.constructor__content-menu__menu').addClass('active');
    });

    $('.variable').click(function () {
        $('.block').removeClass('active');
        $('.tree').removeClass('active');
        $('.linear').removeClass('active');
        $('.nav--block').removeClass('active');
        $('.nav--tree').removeClass('active');
        $('.nav--linear').removeClass('active');

        $(this).removeClass('active');
        $(this).addClass('active');
        $('.nav--variable').addClass('active');
    });

    $('.block').click(function () {
        $('.variable').removeClass('active');
        $('.tree').removeClass('active');
        $('.linear').removeClass('active');
        $('.nav--variable').removeClass('active');
        $('.nav--tree').removeClass('active');
        $('.nav--linear').removeClass('active');

        $(this).removeClass('active');
        $(this).addClass('active');
        $('.nav--block').addClass('active');
    });

    $('.tree').click(function () {
        $('.variable').removeClass('active');
        $('.block').removeClass('active');
        $('.linear').removeClass('active');
        $('.nav--variable').removeClass('active');
        $('.nav--block').removeClass('active');
        $('.nav--linear').removeClass('active');

        $(this).removeClass('active');
        $(this).addClass('active');
        $('.nav--tree').addClass('active');
    });

    $('.linear').click(function () {
        $('.variable').removeClass('active');
        $('.tree').removeClass('active');
        $('.linear').removeClass('active');
        $('.nav--variable').removeClass('active');
        $('.nav--block').removeClass('active');
        $('.nav--tree').removeClass('active');

        $(this).removeClass('active');
        $(this).addClass('active');
        $('.nav--linear').addClass('active');
    });




    $('.block-content').click(function () {
        $('#start').addClass('active');
    })
    $('.view').click(function () {
        $('#start').removeClass('active');
        $('.container-blocks').removeClass('active');
        $('.constructor__content-menu__menu-open').removeClass('active');
        $('.constructor__content-menu__menu').addClass('active');
        $('#integrations').removeClass('active');
        $('#finish-block').removeClass('active');
        $('#call-agent').removeClass('active');

    });


    $('.constructor__add-box').click(function () {
        $(this).find('.list-drop--create-box').toggleClass('active')
    })


    function clearParams() {
        $('.param-header').removeClass('active');
        $('.param-body').removeClass('active');
        $('.param-params').removeClass('active');

        $('.constructor__param-header').removeClass('active');
        $('.constructor__param-body').removeClass('active');
        $('.constructor__param-params').removeClass('active');
    }
    $('.param-header').click(function () {
        clearParams();
        $(this).addClass('active');
        $('.constructor__param-header').addClass('active');
    })
    $('.param-body').click(function () {
        clearParams();
        $(this).addClass('active');
        $('.constructor__param-body').addClass('active');

    })
    $('.param-params').click(function () {
        clearParams();
        $(this).addClass('active');
        $('.constructor__param-params').addClass('active');

    })

    function clearResponses() {
        $('.integration-response').removeClass('active');
        $('.integration-dataset').removeClass('active');
        $('.map-var__response').removeClass('active');
        $('.map-var__dataset').removeClass('active')

    }

    $('.integration-response').click(function () {
        clearResponses();
        $(this).addClass('active');

        $('.map-var__response').addClass('active')
    })

    $('.integration-dataset').click(function () {
        clearResponses();
        $(this).addClass('active');
        $('.map-var__dataset').addClass('active')

    })


    $('.container-select .select-btn').click(function (e) {
        e.stopPropagation()
        $(this).toggleClass('active');
    })

    $('.content-1 .select-btn').click(function () {
        $('.content-1 .list-drop').toggleClass('active')
    })

    $('.out-map .list-drop__item').click(function () {
        $('.wrapper-map').addClass('active');
    })

    // $('.container-select .select-btn .list-drop--secondary').click(function () {
    //     $(this).toggleClass('active');
    // })


    $('.request a').click(function () {
        $('.request').removeClass('active');
        $('.url').addClass('active');
    })

    $('.url a').click(function () {
        $('.url').removeClass('active');
        $('.out-map').addClass('active');
    })

    $('#location-block .constructor__container-start__input input').keydown(function () {

        $('#location-block .list-drop').addClass('active')
    })

    $('#location-block .list-drop .list-drop__item').click(function () {
        $('#location-block .list-drop').removeClass('active')
        $('#location-block .btn--primary').addClass('active')
        $('#location-block .location-container').addClass('active')

    })

    $('#location-block .btn--primary').click(function () {
        $('#location-block .constructor__container-start__input').removeClass('active')
        $('#location-block .info').css('display', 'none');

        $('#location-block .full-location').addClass('active')
    })


    $('#integrations .dataset-item').click(function (e) {
        e.stopPropagation();
        if ($(this).hasClass('show')) {
            $(this).removeClass('show');
            $(this).addClass('hide');
        } else {
            $(this).removeClass('hide');
            $(this).addClass('show');
        }

    })

    $('.dataset-item').click(function () {
        $(this).toggleClass('active');
    })




    $('.request .list-drop__item').click(function () {
        $('.request .list-drop__item').removeClass('active');
        $(this).addClass('active');
        $('.list-drop--primary').removeClass('active');
        $('.request .select-btn').removeClass('active');

    })





    function clearActiveSocial() {
        $('.change-social-social__item').removeClass('active')
        $('.chat-creating').removeClass('chat-creating--messenger')
        $('.chat-creating').removeClass('chat-creating--wpp')
        $('.chat-creating').removeClass('chat-creating--webchat')
        $('.chat-creating').removeClass('chat-creating--voice')
    }
    $('.wpp').click(function () {
        clearActiveSocial()
        $(this).addClass('active');
        $('.chat-creating--wpp').addClass('active')
        $('.chat-creating').addClass('chat-creating--wpp')


    })

    $('.msgr').click(function () {
        clearActiveSocial()
        $(this).addClass('active');

        $('.chat-creating').addClass('chat-creating--messenger')


    })
    $('.wbc').click(function () {
        clearActiveSocial()
        $(this).addClass('active');
        $('.chat-creating').addClass('chat-creating--webchat')


    })

    $('.voice').click(function () {
        clearActiveSocial()
        $(this).addClass('active');
        $('.chat-creating').addClass('chat-creating--voice')


    })

    $('.adv').click(function () {
        $('.change-mode__icon').removeClass('active');
        $(this).addClass('active');

        $('.simple-mode').removeClass('active')
        $('.advanced-mode').addClass('active')
    })

    $('.simple').click(function () {
        $('.change-mode__icon').removeClass('active');
        $(this).addClass('active');
        $('.advanced-mode').removeClass('active')
        $('.simple-mode').addClass('active')

    })

    $('.window-side').click(function () {
        $('.change-mode__icon').removeClass('active');
        $(this).addClass('active');
    })

    $('.header__user').click(function () {
        $('.header__user .list-drop').toggleClass('active');
    })

    // Checkbox script

    $('.check-container').click(function () {
        $('.check').toggleClass('active');
    })


    // $('#condition-block .conditionals').click(function () {
    //     $('#condition-block .list-drop').toggleClass('active')
    // })

    $('.container-drag-drop button').click(function () {
        $('.container-drag-drop').removeClass('active');
        $('.container-result').addClass('active');
    })

    $('.result__exclude').click(function () {
        $('.container-result').removeClass('active');
        $('#start .container-select').addClass('active');
        $('#start .container-select .list-drop--primary').removeClass('active');
        $('#start .container-select .select-btn').removeClass('active');
        $('#start .container-select').addClass('active');
    })


    $('.buttom-var').click(function (e) {
        e.stopPropagation();
        $('.buttom-var .var-list .list-drop').toggleClass('active')
    })

    $('#condition-block .container-conditionals').click(function (e) {
        e.stopPropagation()
        $('#condition-block .define-condition-container .wrapper-conditionals .list-operators').toggleClass('active');
    })

    $('.condition-input').click(function () {
        $('#condition-block .define-condition-container .wrapper-conditionals .list-operators').toggleClass('active');
    })

    $('#condition-block .and').click(function () {
        $('.wrapper-conditionalsOne').addClass('active')
        $('.wrapper-conditionalsTwo').removeClass('active hide')
        $('.wrapper-conditionalsTwo .buttom-var').css('display', 'none');
        $('.wrapper-conditionalsTwo .container-conditionalsTwo').css('display', 'none')
        $('.conditional-operator').addClass('active');
        $('.list-operators').removeClass('active')
    })

    $('.select-fluxo.active .button-select').click(function (e) {
        e.stopPropagation();
        e.preventDefault()
        $('.select-fluxo .button-select .list-drop').toggleClass('active')
    })


    $('.container-list .select-btn').click(function () {
        $('.container-list .list-parameters').toggleClass('active')

    })

    // $('#integrations constructor__container-start__content__header__text').click(function(){
    //     $('#integrations .request').toggleClass('active')
    // }).select-btn

    $('#integrations .select-btn').click(function () {
        $('#integrations .request .list-drop').toggleClass('active')
    })

    $('#integrations .out-map .select-btn').click(function () {
        $('#integrations .out-map .list-drop').toggleClass('active')
    })

    $('#integrations .subtitle-conf').click(function () {
        $('#integrations .request').toggleClass('active')
    })
    $('#integrations .subtitle-conf').click(function () {
        $('#integrations .out-map').toggleClass('active')
    })
    $('#integrations .subtitle-conf').click(function () {
        $('#integrations .url').toggleClass('active')
    })

    $('.side-left .container-actions .photo').click(function () {
        $('.side-left .container-actions').toggleClass('active');
    })
    $('.side-left .container-actions .bubble-tap').click(function () {
        $('.side-left .container-actions').toggleClass('active');
    })

    $('.side-right .container-actions .photo').click(function () {
        $('.side-right .container-actions').toggleClass('active');
    })
    $('.side-right .container-actions .bubble-tap').click(function () {
        $('.side-right .container-actions').toggleClass('active');
    })

    $('.side-right .container-message__emojis__icon').click(function () {
        $('.side-right .list-emoji').toggleClass('active')
    })
    $('.side-left .container-message__emojis__icon').click(function () {
        $('.side-left .list-emoji').toggleClass('active')
    })
    $('.side-left .container-select .select-btn').click(function () {
        $('.side-left .container-select .list-drop--primary').toggleClass('active')
    })

    $('.side-right .container-select .select-btn').click(function () {
        $('.side-right .container-select .list-drop--primary').toggleClass('active')
    })

    $('.side-left .container-actions .box-actions__content__midia-name .icon-Trash').click(function () {
        $('.side-left .container-actions .wrapper-midia').remove()
    })

    $('.side-right .container-actions .box-actions__content__midia-name .icon-Trash').click(function () {
        $('.side-right .container-actions .wrapper-midia').remove()
    })

    $('.header__notification__item.notifications').click(function (e) {
        $('.header__notification .list-drop').toggleClass('active')
    })
    $('.header__notification .list-drop .icon-Close').click(function () {
        $('.header__notification .list-drop').removeClass('active');
    })

    $('.header__notification .help').click(function () {
        $('.aba-help').toggleClass('active')
    })
    $('.aba-help .aba-help__title .icon-Close').click(function () {
        $('.aba-help').removeClass('active')

    })

    $('.docs__main__col-left__item').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
    })

    $('.docs__main__col-left__item__topcs').click(function (e) {
        e.stopPropagation()
        e.preventDefault();
        $(this).toggleClass('active')
        // alert('ok')
    })


    // Modal Getting Started
    $('.wrapper-first-step #radio-1').click(function () {
        $('.wrapper-first-step .developer').removeClass('active')
        $('.wrapper-first-step .manager').addClass('active')
    })

    $('.wrapper-first-step #radio-2').click(function () {
        $('.wrapper-first-step .manager').removeClass('active')
        $('.wrapper-first-step .developer').addClass('active')
    })










    function removeSkill() {
        $('.skill-coding.basic').removeClass('active')
        $('.skill-coding.intermediate').removeClass('active')
        $('.skill-coding.advanced').removeClass('active')
    }

    $('.wrapper-second-step #radio-3').click(function () {
        removeSkill()
        $('.skill-coding.advanced').addClass('active');

    })
    $('.wrapper-second-step #radio-4').click(function () {
        removeSkill()
        $('.skill-coding.intermediate').addClass('active');

    })

    $('.wrapper-second-step #radio-5').click(function () {
        removeSkill()
        $('.skill-coding.basic').addClass('active');

    })


    var step = 1;
    var numberGetting = document.querySelector('.modal__header__number')
    var btnPrv = document.querySelector('.modal__btn-secondary');

    if (step === 1) {
        numberGetting.innerHTML = step
        btnPrv.style.opacity = '0';
        btnPrv.style.cursor = 'default';
    }



    clickNext = () => {


        if (step > 0 && step < 4) {

            step++
            console.log(step)

            if (step === 2) {
                document.querySelector('.wrapper-first-step').classList.remove('active');
                document.querySelector('.wrapper-second-step').classList.add('active');
                numberGetting.innerHTML = step
                btnPrv.style.opacity = '0.8';
                btnPrv.style.cursor = 'pointer';
            }

            if (step === 3) {
                document.querySelector('.wrapper-second-step').classList.remove('active');
                document.querySelector('.wrapper-third-step').classList.add('active');
                numberGetting.innerHTML = step

            }

            if (step === 4) {
                document.querySelector('.wrapper-third-step').classList.remove('active');
                document.querySelector('.wrapper-content-first').classList.remove('active');
                document.querySelector('.wrapper-content-second').classList.add('active');
            }
        }

    }


    clickPrev = () => {


        if (step <= 4) {
            step--
            console.log(step)


            if (step === 1) {
                document.querySelector('.wrapper-second-step').classList.remove('active');
                document.querySelector('.wrapper-first-step').classList.add('active');
                numberGetting.innerHTML = step
                btnPrv.style.opacity = '0';
                btnPrv.style.cursor = 'default';
            }

            if (step === 2) {
                document.querySelector('.wrapper-third-step').classList.remove('active');
                document.querySelector('.wrapper-second-step').classList.add('active');
                numberGetting.innerHTML = step
                btnPrv.style.opacity = '0.8';
                btnPrv.style.cursor = 'pointer';
            }

            if (step === 3) {
                document.querySelector('.wrapper-third-step').classList.add('active');
                document.querySelector('.wrapper-content-second').classList.remove('active');
                document.querySelector('.wrapper-content-first').classList.add('active');
            }


        }

    }




    $('.container-third-step__item').click(function () {
        $(this).toggleClass('active')
    })


    $('.container-mode.dark').click(function () {
        $(this).toggleClass('active');
    });


    function remoV() {
        $('.nav-sub-header').removeClass('active')
        $('.constructor').removeClass('active')
        $('.publish').removeClass('active')

    }
    $('.sub-header-container .build-nav').click(function () {
        remoV();
        $(this).addClass('active')
        $('.constructor').addClass('active')
        

    })
    $('.sub-header-container .publish-nav').click(function () {
        remoV();
        $(this).addClass('active')
        $('.publish').addClass('active')


    })
    $('.sub-header-container .test-nav').click(function () {
        remoV();
        $(this).addClass('active')
    })

    function remoVi() {
        $('.menu-publish__item').removeClass('active')
        $('.container-general').removeClass('active')
        $('.container-language').removeClass('active')
        $('.container-authorization').removeClass('active')


    }
    
    $('.menu-publish__item.lang').click(function(){
        remoVi()
        $(this).addClass('active');
        $('.container-language').addClass('active')
        
    })
    $('.menu-publish__item.general').click(function(){
        remoVi()
        $(this).addClass('active');
        $('.container-general').addClass('active')
        
    })
    $('.menu-publish__item.autori').click(function(){
        remoVi()
        $(this).addClass('active');
        $('.container-authorization').addClass('active')
        $('.publish__container__bottom button').addClass('active')
        
    })

    
    $('.wrapper-general-items .select-btn').click(function(){
        $('.list-drop').toggleClass('active')
    })

    $('#map-variables .wrappep-map-var .select-btn').click(function(){
        $('#map-variables .wrappep-map-var .list-drop').toggleClass('active')
    })

    removeDt = () => {
        $('.change-butons-map__item').removeClass('active')
        $('.map-var__response').removeClass('active');
        $('.map-var__dataset').removeClass('active');


    }

    $('.change-butons-map__item.rsp').click(function(){
        removeDt();
        $(this).addClass('active');
        $('.map-var__response').addClass('active');
    })
    
    $('.change-butons-map__item.dts').click(function(){
        removeDt();
        $(this).addClass('active');
        $('.map-var__dataset').addClass('active');
    })
   
    removt = () => {
        $('.container-confirm').removeClass('active')
        $('.container-loading1').removeClass('active');
        $('.container-pub-result').removeClass('active');
        $('.modal__footer').removeClass('active');
    }

    $('.modal__btn.modal__btn-primary.yes').click(function(){
        removt();
        $('.container-loading1').addClass('active');
    })

    $('.modal__btn.modal__btn-primary.yes').click(function(){
        removt();
        $('.container-loading1').addClass('active');
    })


    $('.container-loading1').click(function(){
        removt();
        $('.container-pub-result').addClass('active');
    })

    
    


    // Ellipsis({
    //     className: '.text-ellipsis',
    //     lines: 4,
    //     break_word: true,
    // })

});



function forIntegrationItem() {
    $('#start').removeClass('active');
    $('#integrations').addClass('active')
}
function forCallAgentItem() {
    $('#start').removeClass('active');
    $('#call-agent').addClass('active')
}
function forFinishItem() {
    $('#start').removeClass('active');
    $('#finish-block').addClass('active')
}
function forConditionItem() {
    $('#start').removeClass('active');
    $('#condition-block').addClass('active')
}

function forLocationItem() {
    $('#start').removeClass('active');
    $('#location-block').addClass('active')
}
function forStartItem() {
    $('#start').addClass('active');
}




document.addEventListener('DOMContentLoaded', function () {



    // JSON EXEMPLO BLOCO INTEGRAÇÕES
    var data = {
        "response": {
            "version": "0.1",
            // "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
            "features": {
                "conditions": 1
            }
        },
        "current_observation": {
            "image": {
                "url": "http://icons-ak.wxug.com/graphics/wu2/logo_130x80.png",
                "title": "Weather Underground",
                "link": "http://www.wunderground.com"
            }
        }
    }


    const jsonPreview = document.getElementById("preview-json");

    if (jsonPreview !== null) {
        jsonPreview.innerHTML = JSON.stringify(data, undefined, 2);
        var alturaJson = document.querySelector(".preview-json").offsetHeight - 48;
        var lineHeight = 15;
        var qtdLinhas = parseInt(alturaJson / lineHeight);

        for (var x = 1; x <= qtdLinhas; x++) {
            console.log(x)
            var lineContent = document.querySelector('.line-number-container');
            var lineNumber = document.createElement('div');
            lineNumber.setAttribute("class", "line-number");
            let line = lineContent.appendChild(lineNumber);
            line.innerHTML = 'x';

        }
    }
    //End 

    if (typeof tippy !== "undefined") {
        tippy(".tippy-default", {
            arrow: true,
            allowHTML: true,
            arrowType: "round",
            duration: 250,
            theme: "google",
        });


        var tippycontextmenus = document.getElementsByClassName('tippy-context-menu');
        if (tippycontextmenus) {
            tippy(".tippy-context-menu", {
                content(reference) {
                    var template = document.getElementById(reference.getAttribute("data-template"));
                    var container = document.createElement('div');
                    if (template) {
                        container.appendChild(document.importNode(template, true));
                        return container;
                    }
                },
                arrow: true,
                allowHTML: true,
                arrowType: "round",
                duration: 250,
                theme: "genium",
                interactive: true,
                trigger: "click",
                boundary: 'window',
                hideOnClick: "toggle",

            });
        }
    }



    // draggable boxes

    // if (PlainDraggable) {
    //     new PlainDraggable(document.querySelector('#draggable-start'));
    //     new PlainDraggable(document.querySelector('#draggable-condition'));
    //     new PlainDraggable(document.querySelector('#draggable-call'));
    //     new PlainDraggable(document.querySelector('#draggable-fim'));
    //     new PlainDraggable(document.querySelector('#draggable-location'));
    //     new PlainDraggable(document.querySelector('#draggable-integrations'));
    // }


    /*Grafico dashboard*/

    var options1 = {


        chart: {
            height: 315,
            type: 'line',
            shadow: {
                enabled: false,
                color: '#bbb',
                top: 3,
                left: 2,
                blur: 3,
                opacity: 1
            },

            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },

        },
        stroke: {
            width: 2,
            curve: 'smooth',
            colors: ['#455CC7',]
        },
        series: [{
            name: 'Tarefa',
            data: [1, 8, 2, 9, 3, 8, 4, 9, 5, 8]
        }],
        xaxis: {
            type: 'datetime',
            categories: ['8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
            labels: {
                show: true,
                style: {
                    color: '#7E8190',
                    fontSize: '16px',
                    fontFamily: "Inter Regular",
                    cssClass: 'apexcharts-yaxis-label',
                },
            },

            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },

        grid: {
            borderColor: '#EBEDF4',
        },


        markers: {
            size: 0,
            colors: ['#FFF',],
            strokeColors: '#455CC7',
            strokeWidth: 4,
            strokeOpacity: 0.9,
            fillOpacity: 1,
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            hover: {
                sizeOffset: 12
            }
        },

        yaxis: {
            min: 0,
            max: 10,

            labels: {
                show: true,
                style: {
                    color: '#7E8190',
                    fontSize: '12px',
                    fontFamily: "Inter Regular",
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
    }

    var chart1 = new ApexCharts(
        document.querySelector("#chart1"),
        options1
    );

    chart1.render();


    /*Grafico Linha*/

    var optionsLine = {
        chart: {
            width: 371,
            height: 100,
            type: 'area',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: true
            }


        },

        markers: {
            size: 0,
            colors: ['#FFF',],
            strokeColors: '#455CC7',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            fillOpacity: 1,
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            hover: {
                sizeOffset: 5
            }
        },


        yaxis: {

            show: false,
            labels: {
                show: false,
                style: {
                    color: '#7E8190',
                    fontSize: '12px',
                    fontFamily: "Inter Regular",
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },

        grid: {
            borderColor: false,
        },

        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
            curve: 'smooth',
            colors: ['#455CC7',]
        },

        fill: {
            type: ['gradient', 'solid'],
            opacity: 1,
            colors: ['transparent linear-gradient(269deg, #FFFFFF 0%, #D9E2F2 4%, #5187E0 100%)',],


        },

        series: [{

            data: [31, 40, 28, 51, 42, 109, 100]
        }],

        xaxis: {
            labels: { show: false },
            show: false,
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
        },

        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        }

    }


    var chartLine = new ApexCharts(
        document.querySelector('.chartLine'),
        optionsLine
    );

    chartLine.render();




//     /*Grafico Barra*/

//     var optionsBar = {
//         chart: {
//             height: 100,
//             width: 255,
//             type: 'bar',
//             sparkline: {
//                 enabled: true
//             }
//         },

//         plotOptions: {
//             bar: {
//                 horizontal: true,
//             }
//         },
//         dataLabels: {
//             enabled: false
//         },
//         series: [{
//             data: [400, 430, 448, 470, 540]
//         }],
//         xaxis: {
//             categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy'],
//         }
//     }

//     var chartBar = new ApexCharts(
//         document.querySelector(".chartBar"),
//         optionsBar
//     );

//     chartBar.render();


//     /* Semi circulo */
//     var optionsSemi = {
//         chart: {
//             type: 'radialBar',
//             offsetY: -20,
//             width: 300,
//             height: 300,
//         },
//         plotOptions: {
//             radialBar: {
//                 startAngle: -90,
//                 endAngle: 90,
//                 track: {
//                     background: "#e7e7e7",
//                     strokeWidth: '97%',
//                     margin: 5, // margin is in pixels
//                     shadow: {
//                         enabled: true,
//                         top: 2,
//                         left: 0,
//                         color: '#999',
//                         opacity: 1,
//                         blur: 2
//                     }
//                 },
//                 dataLabels: {
//                     name: {
//                         show: false
//                     },
//                     value: {
//                         offsetY: -2,
//                         fontSize: '22px'
//                     }
//                 }
//             }
//         },
//         fill: {
//             type: 'gradient',
//             gradient: {
//                 shade: 'light',
//                 shadeIntensity: 0.4,
//                 inverseColors: false,
//                 opacityFrom: 1,
//                 opacityTo: 1,
//                 stops: [0, 50, 53, 91]
//             },
//         },
//         series: [76],
//         labels: ['Average Results'],

//     }

//     var chartSemi = new ApexCharts(
//         document.querySelector(".chartSemi"),
//         optionsSemi
//     );

//     chartSemi.render();

//     /* Grafico Column */






//     var optionsColumn = {
//         chart: {
//             width: 200,
//             height: 100,
//             type: 'bar',
//             stacked: true,
//             toolbar: {
//                 show: false
//             },
//             zoom: {
//                 enabled: false
//             },
//             sparkline: {
//                 enabled: true
//             },

//         },

//         plotOptions: {
//             bar: {

//                 horizontal: false,
//                 columnWidth: '35%',
//                 heatmap: {
//                     radius: 10,

//                 },
//             },

//         },
//         series: [{
//             name: 'PRODUCT A',
//             data: [44, 55, 41, 67, 22, 43],

//         }, {
//             name: 'PRODUCT B',
//             data: [13, 23, 20, 8, 13, 27]
//         }],
//         // xaxis: {
//         //     type: 'datetime',
//         //     categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
//         // },

//         legend: {
//             show: false,
//             position: 'right',
//             offsetY: 40
//         },
//         fill: {
//             opacity: 1,

//         },

//     }

//     var chartColumn = new ApexCharts(
//         document.querySelector(".chartColumn"),
//         optionsColumn
//     );

//     chartColumn.render();



//     /*Grafico Pizza */

//     var optionsPie = {
//         chart: {
//             type: 'donut',
//             width: 170,
//             height: 170,
//             toolbar: {
//                 show: false
//             },
//             sparkline: {
//                 enabled: true
//             },
//         },

//         plotOptions: {
//             pie: {
//                 donut: {
//                     size: '66px',
//                     labels: {
//                         show: true,
//                         name: {
//                             show: true,
//                             fontSize: 20,
//                             color: '#51525A',
//                         },
//                         total: {
//                             show: true,
//                         }
//                         // value: {

//                         // }
//                     }
//                 }
//             }
//         },
//         series: [44, 55, 41],

//     }


//     var chartPie = new ApexCharts(
//         document.querySelector(".chartPie"),
//         optionsPie
//     );

//     chartPie.render();






});





function clearClassGraphics() {
    const chart = document.querySelector('.chart.active');
    chart.classList.remove('active');
}





function graphicColumn() {
    clearClassGraphics();
    console.log('column log')

    var chartColum = document.querySelector('.chartColumn');
    chartColum.classList.add('active');
}

function graphicLine() {
    clearClassGraphics();
    console.log('Line log')

    var chartLine = document.querySelector('.chartLine');
    chartLine.classList.add('active');
}
function graphicBar() {
    clearClassGraphics();
    console.log('Bar log')

    var chartBar = document.querySelector('.chartBar');
    chartBar.classList.add('active');
}
function graphicPie() {
    clearClassGraphics();
    console.log('Pie log')

    var chartPie = document.querySelector('.chartPie');
    chartPie.classList.add('active');
}
function graphicSemCircle() {
    clearClassGraphics();
    console.log('Circle log')
    var chartSemi = document.querySelector('.chartSemi');
    chartSemi.classList.add('active');

}

function onGet() {
    var get = document.querySelector('#get').innerHTML;
    document.getElementById('pedido').innerHTML = get;
}


function onPatch() {
    var patch = document.querySelector('#patch').innerHTML;
    document.getElementById('pedido').innerHTML = patch;
}

function onPost() {
    var post = document.querySelector('#post').innerHTML;
    document.getElementById('pedido').innerHTML = post;
}

function onPut() {
    var put = document.querySelector('#put').innerHTML;
    document.getElementById('pedido').innerHTML = put;
}

function onDelete() {
    var delet = document.querySelector('#delete').innerHTML;
    document.getElementById('pedido').innerHTML = delet;
}


function onPasta() {
    var folder = document.querySelector('.folder__name').innerHTML;
    var folderName = document.querySelector('#move-folder .content-1 .select-btn .title').innerHTML = folder;
    var imgUrl = document.querySelector('.folder__icon').innerHTML;
    var divImg = document.querySelector('#move-folder .content-1 .select-btn .title').document.createElement("p");
    divImg

    folderName;

}

