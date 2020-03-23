import UserActionTypes from "./user.types";
import { api,connection_platform } from "../../services/api";
import { RegisterReqWebSocket,sendIPSocket } from '../../services/imsdn'
import { create_info_supervision_group } from '../supervisiongroup/supervisiongroup.action'
import { get_info_queue } from '../queue/queue.action'
import { get_info_agents } from '../agent/agent.action'
import { get_info_queue_permission } from '../queuepermission/queuepermission.action'
import { get_info_diff_time } from '../environment/environment.action'
import setupSocket from '../../services/imsdn'
import Moment from 'moment'

var portims          = connection_platform.port_socket_intern;
var pathname         = "";
var gethostname      = window.location.hostname;
var iplocal          = connection_platform.ip_intern
var currenttime      = Moment().format('YYYY-MM-DD HH:mm:ss');

if(gethostname === 'localhost')
  pathname = iplocal;
else
  pathname = gethostname;

if(pathname !== connection_platform.ip_intern){
  portims = connection_platform.port_socket_extern;
}

export const userLogin = () => ({
  type: UserActionTypes.USER_LOGIN
  // payload: u
});

export const userLoginStart = () => ({
  type: UserActionTypes.USER_LOGIN_START
});

export const userLoginSuccess = id => ({
  type: UserActionTypes.USER_LOGIN_SUCCESS,
  payload: id
});

export const userLoginFailure = error => ({
  type: UserActionTypes.USER_LOGIN_FAILURE,
  payload: error
});

export const userLoginAsync = (username, password) => {
  return async (dispatch, getState) => {
    dispatch(userLoginStart());
    try {
      const response = await api.get(
        `login?username=${username}&password=${password}`
      );
      const { id } = response.data;
      if (id === "" || typeof id === "undefined") {
        dispatch(userLoginFailure());
      } else {
        const user = await api.get(`/getinfouser?id=${id}`);
        dispatch(userLoginSuccess(user.data));
        sendIPSocket(user.data.priimsdn,user.data.secimsdn, portims)
        setupSocket(getState, dispatch, user.data);
        insert_user_service_login(user.data)(dispatch);
        get_info_diff_time(currenttime)(dispatch);
        get_info_queue(user.data.id)(dispatch);
        get_info_queue_permission(user.data.id)(dispatch);
        get_info_agents(user.data.id)(dispatch);
      }
    } catch (error) {
      dispatch(userLoginFailure(error));
    }
  };
};

export const userLogout = () => ({
  type: UserActionTypes.USER_LOGOUT
});

export const insert_user_service_login = (user) => {

  return (dispatch) => {
    api.get(`/insertstatusservice?id=${user.id}`)
        .then(response => {
            if(response.data != ''){
              if(user.permitsupervisor===true){
                  return api.get(`/servicegroup?id=${user.id}`)
                  .then(response => {
                        var idsss = response.data;
                        var strSub = idsss.map(function(elem){return elem.id;}).join(",");
                        return api.get(`/groupmonitoring?id=${user.id}`)
                        .then(response => {
                              var idgrp = response.data;
                              var strGrp = idgrp.map(function(elem){return elem.usergroup;}).join("&");
                            return api.get(`/listgroupsupervision?id=${strSub}`)
                            .then(response => {
                              dispatch(create_info_supervision_group(response.data))
                                return api.get(`/servicegroupgestor?id=${strSub}`)
                                .then(response => {
                                    if(response.data !== ""){
                                      var subMonit = response.data;
                                      var strSubMonit = subMonit.map(function(elem){return elem.serviceinid;}).join("&");
                                      RegisterReqWebSocket(dispatch, user, strSubMonit, strGrp);
                                    }
                                })
                              })
                      })
                  })
              }else{
                var strGrp ="";
                var strSubMonit ="";
                RegisterReqWebSocket(dispatch, user, strSubMonit, strGrp);
              }
            }
        })
  };
}