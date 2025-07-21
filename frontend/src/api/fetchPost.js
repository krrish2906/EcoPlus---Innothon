import axios from "./api";

const fetchPost = async(id)=>{
    try {
        console.log("id",id);
        const response = await axios.get(`posts/${id}`);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default fetchPost