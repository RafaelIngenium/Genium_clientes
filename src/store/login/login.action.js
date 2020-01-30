import api from '../../services/api';

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

export const create_info_user = (username) => ({ type: 'ADD_INFO_USER', username })
export const create_info_environment = (language,sip_primary) => ({ type: 'ADD_INFO_ENVIRONMENT', language,sip_primary })
