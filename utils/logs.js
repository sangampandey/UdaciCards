import pwc from 'pretty-web-console'

export function udaci () {
    return {
        log : function(message){
            pwc().bold().log(message)
        },
        debug : function(message){
            pwc({ color: 'gray' }).bold().log(message)
        },
        info : function(message){
            pwc().blue().bold().info(message)
        },
        warn : function(message){
            pwc().bold().warn(message)
        },
        error : function(message){
            pwc({ color: 'red' }).bold().log(message)
        },
        success : function(message){
            pwc({ color: 'green' }).bold().log(message)
        }
    }
}