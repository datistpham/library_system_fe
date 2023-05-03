import axios from "axios"
import { API_URL } from "../../config"
import Cookies from "js-cookie"

const edit_blog= async (content, image, title, blogId)=> {
    const res= await axios({
        url: API_URL+ "/api/v3/blog/edit",
        method: "post",
        data: {
            content, time_created: new Date(),
            image,
            title,
            blogId
        },
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return result
}

export default edit_blog