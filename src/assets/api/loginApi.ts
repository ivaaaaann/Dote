import axios from "axios"
const server = "http://localhost:3000"
const loginApi = async (studentNumber: string, name: string) => {
    const body = {
        studentNumber,
        name
    }
    const { data } = await axios.post(`${server}/login`, body);
    return data
}

export default loginApi