import axios from 'axios';
import { prodURL } from '../utils/config'
const api = axios.create({
    baseURL: prodURL,
});

export function config(token?: string) {
    
    return ({"headers": {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache"
    }});
}

export default api;