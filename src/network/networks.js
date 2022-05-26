import {request, request2} from "./request"

export function loginAxios (config) {
    return request2({
        url: "/login.php",
        params: config
    })
}

export function tqData () {
    return request({
        url: "/tianqi3day.php",
    })
}

export function userAllFun(config){
    return request({
        url:"/yxList.php",
        params:config
    })
}

export function delUserRow(id){
    return request({
        url:"/yxDelRow.php",
        params:{
            id:id
        }
    })
}

export function getKefuInfo(){
    return request({
        url:"/yxLoad.php",
    })
}

export function addUserRow(myObj){
    return request({
        url:"/yxAdd.php",
        params:myObj
    })
}