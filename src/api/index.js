import axios from 'axios';

let http = axios.create({
    baseURL: 'https://p-play.firebaseio.com',
    timeout: 10000
    });

export default {
    getTestList() {
        return http.get('/tests.json?print=pretty').then(response => {
            return response.data;
        }).catch(e => {
            this.errors.push(e)
        });
    },
}