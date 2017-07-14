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
        base1: 'http://rapapi.org/mockjs/19824',
        base: 'http://localhost:3000',
        creations: '/api/videoList'
    }
}