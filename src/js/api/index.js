import axios from 'axios';
export default {
    async addData(data) {
        var response = await axios.post(`/api/training`, data);
        return response.data;
    },
}