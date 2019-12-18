import React,{Component} from "react";
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import SearchBar from "../misc/SearchBar";
import CardResume from "../misc/CardResume";
import TopFiveContainer from "../misc/TopFiveContainer";

const locales = {
  'pt-BR': require('../../locales/pt-BR.json'),
  'en-US': require('../../locales/en-US.json'),
  'es-SP': require('../../locales/es-SP.json')
};

const mapDispatchToProps = dispatch => {}

const mapStateToProps = (state) => {
    return {
      environment: state.environmentReducer
    };
  }

class DashboardComponent extends Component {
  constructor(props){
      super(props)
        this.state = {

        }
    }
    
  render(){
    console.log(this.props)
    const { environment } = this.props;
    const currentLocale = environment.language;
    
    intl.init({
        currentLocale,
        locales
    });

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
                  <SearchBar />
                </div>
              </div>

              <div className="card-performance__chart">
                <div id="chart"></div>
              </div>
            </div>
            <div className="resume-performace ">
              <CardResume
                type="add"
                value="1.4"
                infoText="Atendimentos Concluidos"
              />
              <CardResume
                type="add"
                value="1.2"
                infoText="Atendimentos Resolvidos"
              />
            </div>
          </div>
        </div>

        <div className="flex-row">
          <div className="dash-resume-content">
            <CardResume type="add" value="130" infoText="Atendimentos em curso" />

            <CardResume type="info" value="130" infoText="BOT Info" />

            {/* <CardResume type="info" value="130" infoText="BOT Info" />
            <CardResume type="info" value="130" infoText="BOT Info" />
            <CardResume type="info" value="130" infoText="BOT Info" />
            <CardResume type="info" value="130" infoText="BOT Info" /> */}

            <CardResume type="add" value="" infoText="Adicionar parâmetro" />
          </div>

          <div className="dash-topfive-content">
            <TopFiveContainer label="TOP 5 USUÁRIOS ATIVOS" type="user" />

            <TopFiveContainer label="TOP 5 FLUXOS" type="flow" />
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
