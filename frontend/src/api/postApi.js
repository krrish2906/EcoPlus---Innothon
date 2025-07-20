import axios from 'axios'

const PostApi = async(formData)=>{
    try {
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        const response = await axios.post("http://localhost:3000/api/posts/create",formData)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export default PostApi
