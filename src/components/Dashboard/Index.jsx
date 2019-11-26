import React from "react";
import TopFiveContentItem from "../misc/TopFiveContentItem";

const Index = () => {
  return (
    <React.Fragment>
      <div className="main__body">
        <div className="dash-performance">
          <div className="card-performance">
            <div className="card-performance__header">
              <div className="card-performance__header__title">
                TAREFAS PERFORMADAS
              </div>
              <div className="card-performance__header__date-picker">
                <div className="search">
                  <input className="search__input" placeholder="Busca" />
                  <div className="search__btn">
                    {/* <?php include '../build/images/magnifying-glass.svg'; ?> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-performance__chart">
              <div id="chart"></div>
            </div>
          </div>
          <div className="resume-performace ">
            <div className="card-resume card-resume--first">
              <div className="card-resume__content__title">1.4k</div>
              <div className="card-resume__content__text">
                Atendimentos Concluidos
              </div>
            </div>
            <div className="card-resume card-resume--last">
              <div className="card-resume__content__title">1.2k</div>
              <div className="card-resume__content__text">
                Atendimentos Resolvidos
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-row">
        <div className="dash-resume-content">
          <a
            href="?page=dashboard-live-chat"
            className="card-resume card-resume--add"
          >
            <div classe="card-resume__content">
              <div className="card-resume__content__title">130</div>
              <div className="card-resume__content__text">
                Atendimentos em curso
              </div>
            </div>
          </a>

          <div className="card-resume">
            <div className="card-resume__option">
              <i
                className="material-icons tippy-context-menu opt"
                data-tippy-placement="right"
                data-template="drop-change-chart"
              >
                more_vert
              </i>
              {/* <div className="none"> <?php include('components/inc/drop-change-chart.php'); ?></div> */}
            </div>
            <div className="card-resume__close">
              <i
                className="material-icons tippy-default"
                data-tippy-content="Fechar"
              >
                close
              </i>
            </div>
            <div className="card-resume__content">
              <div className="card-resume__content__title">130k</div>
              <div className="card-resume__content__text">BOT Info</div>
            </div>
            <div className="chartLine" id="a1"></div>
          </div>

          <div className="card-resume">
            <div className="card-resume__option">
              <i
                className="material-icons tippy-context-menu opt"
                data-tippy-placement="right"
                data-template="drop-change-chart"
              >
                more_vert
              </i>
              {/* <div className="none"> <?php include('components/inc/drop-change-chart.php'); ?></div> */}
            </div>
            <div className="card-resume__close">
              <i
                className="material-icons tippy-default"
                data-tippy-content="Fechar"
              >
                close
              </i>
            </div>
            <div className="card-resume__content">
              <div className="card-resume__content__title">130k</div>
              <div className="card-resume__content__text">BOT Info</div>
            </div>
            <div className="chartBar" id="b1"></div>
          </div>

          <div className="card-resume">
            <div className="card-resume__option">
              <i
                className="material-icons tippy-context-menu opt"
                data-tippy-placement="right"
                data-template="drop-change-chart"
              >
                more_vert
              </i>
              {/* <div className="none"> <?php include('components/inc/drop-change-chart.php'); ?></div> */}
            </div>
            <div className="card-resume__close">
              <i
                className="material-icons tippy-default"
                data-tippy-content="Fechar"
              >
                close
              </i>
            </div>
            <div className="card-resume__content">
              <div className="card-resume__content__title">130k</div>
              <div className="card-resume__content__text">BOT Info</div>
            </div>
            <div className="chartSemi" id="c1"></div>
          </div>

          <div className="card-resume">
            <div className="card-resume__option">
              <i
                className="material-icons tippy-context-menu opt"
                data-tippy-placement="right"
                data-template="drop-change-chart"
              >
                more_vert
              </i>
              {/* <div className="none"> <?php include('components/inc/drop-change-chart.php'); ?></div> */}
            </div>
            <div className="card-resume__close">
              <i
                className="material-icons tippy-default"
                data-tippy-content="Fechar"
              >
                close
              </i>
            </div>
            <div className="card-resume__content">
              <div className="card-resume__content__title">130k</div>
              <div className="card-resume__content__text">BOT Info</div>
            </div>
            <div className="chartColumn" id="d1"></div>
          </div>

          <div className="card-resume">
            <div className="card-resume__option">
              <i
                className="material-icons tippy-context-menu opt"
                data-tippy-placement="right"
                data-template="drop-change-chart"
              >
                more_vert
              </i>
              {/* <div className="none"> <?php include('components/inc/drop-change-chart.php'); ?></div> */}
            </div>
            <div className="card-resume__close">
              <i
                className="material-icons tippy-default"
                data-tippy-content="Fechar"
              >
                close
              </i>
            </div>
            <div className="card-resume__content">
              <div className="card-resume__content__title">130k</div>
              <div className="card-resume__content__text">BOT Info</div>
            </div>
            <div className="chartPie" id="f1"></div>
          </div>

          <div className="card-resume card-resume--add ">
            <div className="card-resume__content">
              <div className="card-resume__content__icon">
                {/* <?php include './../build/images/book-medical.svg'; ?> */}
              </div>
              <div className="card-resume__content__text">
                Adicionar parâmetro
              </div>
            </div>
          </div>
        </div>

        <div className="dash-topfive-content">
          <div className="top-five">
            <div className="top-five__title">TOP 5 USUÁRIOS ATIVOS</div>

            <div className="top-five__content">
              <TopFiveContentItem type="user" />
              <div className="top-five__content__btn">
                <button className="btn-text btn-text--underline">
                  Ver Todos
                </button>
              </div>
            </div>
          </div>

          <div className="top-five">
            <div className="top-five__title">TOP 5 FLUXOS</div>

            <div className="top-five__content">
              <TopFiveContentItem type="flow" />

              <div className="top-five__content__btn">
                <button className="btn-text btn-text--underline">
                  Ver Todos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
