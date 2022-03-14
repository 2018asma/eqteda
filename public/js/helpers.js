module.exports =  {
    isName: function(error){
        if(error){
            if(error.path == 'name'){
                return error.message
            }
        }
    },
    isDes: function(error){
        if(error){
            if(error.path == 'description'){
                return error.message
            }
        }
    }
}