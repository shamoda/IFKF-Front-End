import axios from 'axios'

class AthenticationDataService{

    getUser(userId){
        return axios.get(`http://localhost:8080/IFKF/login/${userId}`);
    }

}

export default new AthenticationDataService();