import api from '../../services/api';
import QueuePermissionActionTypes from "./queuepermission.types";

export const get_info_queue_permission = (iduser) => {
    return (dispatch) => {
        return api.get(`/queuepermission?userid=${iduser}`)
        .then(response => {
            dispatch(create_info_queue_permission(response.data))
        })
        .catch(error => {
            console.log(error)
        });
    };
}

export const create_info_queue_permission = (queuepermission) => ({ type: QueuePermissionActionTypes.ADD_INFO_QUEUE_PERMISSION, queuepermission })