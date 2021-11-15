import axios from 'axios';

const list = {
    async render(){
        const res = await axios.get("/api/keywords");

        return (res.data || [])
            .map(item => {
                return `<li>${item.keyword}</li>`;
            }).join('---');
    }
};

export default list;