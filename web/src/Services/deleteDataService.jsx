import { BACKEND } from '../lib/config'
import axios from "axios";


const API_URL = BACKEND.API_URL;


// api sor deletng the object

//service for delete new product
const deleteProduct = async (id) => {
    const url = `${API_URL}/addnewproduct/${id}`;

    return new Promise(async (resolve, reject) => {
        await axios({
            method: 'delete',
            url: url
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        });
    });
}

export {deleteProduct};