/**
 * Created by zhangcheng on 29/05/2017.
 */

module.exports = {
    header:{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    },
    api: {
        base: 'http://rapapi.org/mockjs/19824',
        creations: '/api/videoList'
    }
}