class ApiResponse {
    constructor(statusCode, data, message = "success") {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode<400
    }
}//itna sab kuch ho gya pr ek chij baaki hai ki jb bhi kuch error aaye toh woh error api ke through hi jaaye yeh sb kuch bhi lagaani pdti h

export { ApiResponse }