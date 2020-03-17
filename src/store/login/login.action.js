import api from '../../services/api';
import LoginActionTypes from "./login.types";
import {create_info_environment} from "../environment/environment.action";

export const put_info_user = (iduser,language) => {
    return (dispatch) => {
        return api.get(`/getinfouser?id=${iduser}`)
        .then(response => {
            dispatch(create_info_environment(language,response.data.pripsipproxy))
            dispatch(create_info_user(response.data))
        })
        .catch(error => {
            console.log(error)
        });
    };
}

export const create_info_user = (username) => ({ type: LoginActionTypes.ADD_INFO_USER, username })
