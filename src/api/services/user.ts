/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 22:10:06
 * @LastEditTime: 2022-03-30 22:11:26
 * @LastEditors: Pacific_D
 * @Description: 
 * @FilePath: \cr-frontend\src\api\services\user.ts
 */

import axiosInstance, { IResponse } from "../api"
import { ILogin, IUser } from "../model/user"

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
 export const Login = (params: ILogin): Promise<IResponse> => {
    return axiosInstance.post('user/login', params).then(res => res.data)
}

/**
 * @description: 通过id获取用户
 * @params {IUser} params
 * @return {Promise}
 */
export const getUserInfo = (params: IUser): Promise<IResponse> => {
    return axiosInstance.post('user/getInfo', params).then(res => res.data)
}
