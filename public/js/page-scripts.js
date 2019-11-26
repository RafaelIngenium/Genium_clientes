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

    if(typeof  MicroModal !== 'undefined')
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
        $(this).toggleClass("days-container__days-item__check");

    });


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
    $('.first-fluxo__content-menu__menu').click(function(){
        $(this).removeClass('active');
        $('.first-fluxo__content-menu__menu-open').addClass('active');
        $('.container-blocks').addClass('active');
    });

    $('.opener').click(function(){
        $('.container-blocks').removeClass('active');
        $('.first-fluxo__content-menu__menu-open').removeClass('active');
        $('.first-fluxo__content-menu__menu').addClass('active');
    });

    $('.variable').click(function(){
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

    $('.block').click(function(){
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

    $('.tree').click(function(){
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

    $('.linear').click(function(){
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

    $('.block-content').click(function(){
        $('.first-fluxo__container-start').addClass('active');
    })
    $('.view').click(function(){
        $('.first-fluxo__container-start').removeClass('active');
        $('.container-blocks').removeClass('active');
        $('.first-fluxo__content-menu__menu-open').removeClass('active');
        $('.first-fluxo__content-menu__menu').addClass('active');

    });
});


document.addEventListener('DOMContentLoaded', function () {

    if(typeof  tippy !== 'undefined') {
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



    /*Grafico dashboard*/
    {
        var options = {
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

        var chart = new ApexCharts(
            document.querySelector("#chart"),
            options
        );

        chart.render();
    }

    /*Grafico Linha*/

    var optionsLine = {
        chart: {
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
            colors: ['#455CC7',]
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
        document.querySelector("#a1"),
        optionsLine
    );

    chartLine.render();




    /*Grafico Barra*/

    var optionsBar = {
        chart: {
            height: 100,
            type: 'bar',
            sparkline: {
                enabled: true
            }
        },

        plotOptions: {
            path: {
                fill: ['#455CC7',]
            },
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            data: [400, 430, 448, 470, 540]
        }],
        xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy'],
        }
    }

    var chartBar = new ApexCharts(
        document.querySelector("#b1"),
        optionsBar
    );

    chartBar.render();







    /* Semi circulo */
    var optionsSemi = {
        chart: {
            type: 'radialBar',
            offsetY: -20
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    shadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        series: [76],
        labels: ['Average Results'],

    }

    var chartSemi = new ApexCharts(
        document.querySelector("#c1"),
        optionsSemi
    );

    chartSemi.render();

    /* Grafico Column */






    var optionsColumn = {
        chart: {
            height: 120,
            type: 'bar',
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        series: [{
            name: 'Inflation',
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }],
        xaxis: {
            show: false,

            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: true,
                offsetY: -35,

            }
        },
        fill: {
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "%";
                }
            }

        },
        title: {
            show: false,
            text: 'Monthly Inflation in Argentina, 2002',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chartColumn = new ApexCharts(
        document.querySelector("#d1"),
        optionsColumn
    );

    chartColumn.render();



    /*Grafico Pizza */

    var optionsPie = {
        chart: {
            width: 140,
            type: 'pie',
            sparkline: {
                enabled: true
            }
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        series: [44, 55, 13, 43, 22],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    var chartPie = new ApexCharts(
        document.querySelector("#f1"),
        optionsPie
    );

    chartPie.render();



});



