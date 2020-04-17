import QuickAnswerActionTypes from "./quickanswer.types";
import { api } from "../../services/api";

export const get_quick_answer = () => {
  return (dispatch) => {
      return api.get(`/quickanswer`)
      .then(response => {
          dispatch(create_info_quick_answer(response.data))
      })
      .catch(error => {
          console.log(error)
      });
  };
}

export const create_info_quick_answer = (todos) => ({ type: QuickAnswerActionTypes.ADD_QUICK_ANSWER, todos })
