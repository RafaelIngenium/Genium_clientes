import {api} from '../../services/api';
import TopFiveFlowActionTypes from "./topfiveflow.types";

export const get_top_five_flow = () => {
    return (dispatch) => {
        return api.get(`/topfiveflow`)
        .then(response => {
            dispatch(create_info_top_five_flow(response.data))
        })
        .catch(error => {
            console.log(error)
        });
    };
}

export const create_info_top_five_flow = (topfiveflow) => ({ type: TopFiveFlowActionTypes.ADD_INFO_TOP_FIVE_FLOW, topfiveflow })