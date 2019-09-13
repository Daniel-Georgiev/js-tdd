class CheckingAccount{
    constructor(config){
        this.config = this.validate(config);
        this.products = [];
    }

    validate(params){
        Object.keys(params).forEach((key) => {
            if(key === 'clientId' ){
                if( params[key].length !== 6){
                    throw new TypeError('TypeError: Client ID must be a 6-digit number');
                }else{
                    return {
                        [key]: params[key]
                    }
                }
            }else if(key === 'email'){
                if(!params[key].match(/[A-z]+@[A-z]+\.[A-z]+/g)){
                    throw new TypeError('TypeError: Invalid e-mail');
                }else{
                    return{
                        [key]: params[key]
                    }
                }
            }else if(key === 'firstName'){
                if(params[key].length > 20 || params[key].length < 3){
                    throw new TypeError('TypeError: First name must be between 3 and 20 characters long');
                }
            }else if(key === 'lastName'){
                if(params[key].length > 20 || params[key].length < 3){
                    throw new TypeError('TypeError: Last name must be between 3 and 20 characters long');
                }
            }
            
        })
    }
}



module.exports = CheckingAccount;