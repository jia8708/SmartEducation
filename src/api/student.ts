import useCqupt from '@/utils/useCqupt';
import { axiosInstance } from 'utils/request';
import processData from 'utils/processData';
import { ILogin, IResponse } from 'types/Request';

const token = JSON.parse(sessionStorage.getItem('studentInfo') as string)?.token;

/**
 * @description 学生登录接口
 * @returns {Promise}
 */
export const studentLogin = (params: any): Promise<IResponse> => {
  return axiosInstance.get('/student/login', { params }).then((res) => {
    return res.data;
  });
};

/**
 * @description 学生提交预测接口
 * @returns {Promise}
 */
export const submit = (data: any) => {
  return axiosInstance.post('/student/predict', processData(data)).then((res) => res.data);
};

/**
 * @description 获取同水平学生情况
 * @returns {Promise}
 */
export const getSame = () => axiosInstance.get('/student/same').then((res) => res.data.data);

/**
 * @description 获取生活详情
 * @returns {Promise}
 */
export const getDaily = () => axiosInstance.get('/student/daily').then((res) => res.data.data);

/**
 * @description 获取图书馆详情
 * @returns {Promise}
 */
export const getLib = () => axiosInstance.get('/student/lib').then((res) => res.data.data);

/**
 * @description 获取上岸概率详情
 * @returns {Promise}
 */
export const getPredict = (): Promise<IResponse['data']> => axiosInstance.post(`/student/hasPredict`).then((res) => res.data.data);

/**
 * @description 获取比较详情
 * @returns {Promise}
 */
export const getCompare = (isCqupt: boolean): Promise<IResponse['data']> => {
  return axiosInstance.get(`/student/college/process/${isCqupt ? 'cy' : 'wx'}`).then((res) => res.data.data);
};
