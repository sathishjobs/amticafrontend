import axios from "axios";

//this is enum of environment status
let env = "development";

if (env === "development")
    axios.defaults.baseURL = "http://localhost:9090/";
else axios.defaults.baseURL = "https://amticachallange.herokuapp.com/";


axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

class UserApi {
    constructor() {
        this.path = "user";
    }

    async signin(args) {
        try {
            const { data } = await axios.post(`${this.path}/signin`, { ...args });
            return data;
        } catch (e) {
            throw e;
        }
    }

    async signUp(args) {
        try {
            const { data } = await axios.post(`${this.path}/signup`, { ...args });
            return data;
        } catch (e) {
            throw e;
        }
    }

    async isUserExist(args){
        try {
            const { data } = await axios.post(`${this.path}/isUserExist`,{...args});
            return data;
        } catch (e) {
            throw e;
        }
    }
}

export const User = new UserApi();
