import axios from 'axios';
const ENV = import.meta.env
const APIrout = ENV.VITE_APIROUTE

const UserRouts = {
    store : (userData) =>{
        axios({
            method: "post",
            url: `${APIrout}/usuarios`,
            data: {
              uid: userData,
            },
          });
    }
}

export default UserRouts