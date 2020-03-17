import api from '../../services/api';
import QueueActionTypes from "./queue.types";

export const get_info_queue = (iduser) => {
    return (dispatch) => {
        return api.get(`/queue?userid=${iduser}`)
        .then(response => {
            dispatch(create_info_queue(response.data))
        })
        .catch(error => {
            console.log(error)
        });
    };
}

export const create_info_queue = (queue) => ({ type: QueueActionTypes.ADD_INFO_QUEUE, queue })