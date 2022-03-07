class ValidateEmail{
    constructor(email){
        this.email = email;
    }

    validate(){
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const otp = parseInt(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000)

        if (String(this.email).toLowerCase().match(reg)){
            // Send opt from here
            return [true, otp]
        }
        else{
            return [false, otp]
        }
    }
}

export default ValidateEmail