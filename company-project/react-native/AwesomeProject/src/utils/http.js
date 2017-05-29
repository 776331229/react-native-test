/**
 * Created by zhangcheng on 29/05/2017.
 */
import lodash from 'lodash'
import config from './config';
import Mock from 'mockjs'
let http = {};

/**
 * GET请求
 * */
http.get = (url,params)=>{

    if(params){
        url+='?'+formatParams(params);
    }
    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => Mock.mock(responseJson));
};

/**
 * POST请求
 * */
http.post = (url,body)=>{
    let options = lodash.extend(config.header,{
        body:JSON.stringify(body)
    });
    return fetch(url,options)
        .then((response) => response.json())
        .then((responseJson) => Mock.mock(responseJson));
}

// GET 请求时候，格式化参数
function formatParams (data) {
    let arr = [];
    for (let name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
    }
    return arr.join('&')
}

module.exports = http;