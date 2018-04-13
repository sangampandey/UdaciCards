import pwc from 'pretty-web-console'

export function udaci () {
    return {
        log : function(message){
            // pwc().bold().log(message)
            console.log(message);
        },
        debug : function(message){
            //pwc({ color: 'gray' }).bold().log(message)
            console.debug(message);
        },
        info : function(message){
            //pwc().blue().bold().info(message)
            console.info(message);
        },
        warn : function(message){
            // pwc().bold().warn(message)
            console.warn(message);
        },
        error : function(message){
            //pwc({ color: 'red' }).bold().log(message)
            console.error(message);
        },
        success : function(message){
            //pwc({ color: 'green' }).bold().log(message)
        }
    }
}