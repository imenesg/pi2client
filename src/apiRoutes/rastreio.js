import axios from 'axios';
const ENV = import.meta.env
const APIrout = ENV.VITE_APIROUTE

const RastrioRouts = {
    store : (rastreioData) =>{
        return axios({
            method: "post",
            url: `${APIrout}/rastreios`,
            data: {
                firebase_uid: rastreioData.uid,
                codigo_rastreio: rastreioData.codigoRastreio,
                rastreio_apelido: rastreioData.apelidoRastreio
            },
          });
    },
    show : (uid) =>{
        const rastreios =  axios(`${APIrout}/rastreios/${uid}`);
        return rastreios
    },
    buscaRastreio: (codigo)=>{
        const rastreio = axios(`${APIrout}/rastreio/${codigo}`);
        return rastreio
    },
    destroy : (rastreioData)=>{
        return axios({
            method: "delete",
            url: `${APIrout}/rastreios/${rastreioData.rastreioId}?uid=${rastreioData.uid}`,
          });
    },
    update : (rastreioData)=>{
        return axios({
            method: "put",
            url: `${APIrout}/rastreios/${rastreioData.rastreioId}`,
            data: {
                firebase_uid: rastreioData.uid,
                codigo_rastreio: rastreioData.codigoRastreio,
                rastreio_apelido: rastreioData.apelidoRastreio
            },
          });
         
    },
    getSavedRastreio:(uid, codigo)=>{
        const rastreio =  axios(`${APIrout}/rastreios/${uid}?codigo=${codigo}`);
        return rastreio
    }
}

export default RastrioRouts