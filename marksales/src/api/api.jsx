import axios from 'axios'

let url1 = 'http://31.97.51.179:8081/bybranch';
let url2 = 'http://31.97.51.179:8081/bycob';
let url3 = 'http://31.97.51.179:8081/api/progress';
let url4 = 'http://31.97.51.179:8081/bylob';
let url5 = 'http://31.97.51.179:8081/legend';

export async  function getBybranch () {
    const getDatabranch = await axios.get (url1);
    return getDatabranch.data;
}

export async function getBycob () {
    const getDataCob = await axios.get (url2);
    return getDataCob.data;
}

export async function getProgress () {
    const getprog = await axios.get (url3);
    return getprog.data;
}

export async function getBylob () {
    const getDataLob = await axios.get (url4);
    return getDataLob.data;
}

export async function getBylegend () {
    const getDatalegend = await axios.get (url5);
    return getDatalegend.data;
}
