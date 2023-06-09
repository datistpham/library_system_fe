import axios from "axios"
import { API_URL } from "../../config"
import Cookies from "js-cookie"

const accept_request_book_back= async (history_id)=> {
    const res= await axios({
        url: API_URL+ "/api/v2/book/action/accept/finish",
        method: "post",
        data: {
            history_id, user_id: Cookies.get("uid")
        },
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return result
}

export default accept_request_book_back