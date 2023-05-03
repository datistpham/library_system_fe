import axios from "axios"
import { API_URL } from "../../config"

const get_detail_blog= async (blogId)=> {
    const res= await axios({
        url: API_URL+ "/api/v3/blog/detail",
        method: "GET",
        params: {
            blogId
        }
    })
    const result= await res.data
    return result
}

export default get_detail_blog