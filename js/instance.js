let instance = axios.create(); //创建单独的实例
instance.defaults.baseURL = 'http://127.0.0.1:8888';
instance.defaults.headers['Content-Type'] = 'multipart/form-data';
instance.defaults.transformRequest = (data, headers) => {
    const contentType = headers['Content-Type'];
    if (contentType === "application/x-www-form-urlencoded") return Qs.stringify(data);
    return data;
};
//transformRequest处理post参数，data为要传的文件，Qs.stringify将对象转为query参数

//截拦响应结果，直接返回主体信息。
instance.interceptors.response.use(response => {
    return response.data;
});