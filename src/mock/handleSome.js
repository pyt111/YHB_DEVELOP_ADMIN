export default {
    checkSome: config =>{
       let backData;
        let data = JSON.parse(config.body)
        
        if(data != '') {
            backData = {
                userId:data.userId,
                statuss:'1'
            }
        }
        return backData
    },
    synchronizationSome: config => {
        let backData;
        let data = JSON.parse(config.body)
        if(data != '') {
            backData = {
                userId:data.userId,
                creationTime:'1'
            }
        }
        return backData
    }
}