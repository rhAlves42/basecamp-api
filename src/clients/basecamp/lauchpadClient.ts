import axios from "axios"
import IAuthTokenResponse from "src/interfaces/basecamp/authTokenResponse"

const axiosInstance = axios.create({
  baseURL: process.env.BASECAMP_AUTH_LAUNCH_PAD_URL,
});

class LauchpadClient {

  getOAuth2Url(): string {
    const baseURL = process.env.BASECAMP_AUTH_LAUNCH_PAD_URL
    const params = `?type=web_server&client_id=${process.env.BASECAMP_CLIENT_ID}&redirect_uri=${process.env.BASECAMP_REDIRECT_URL}`
    return `${baseURL}${params}`
  }

  async getAuthToken(code: string): Promise<IAuthTokenResponse> {
    try {
      const params = `?type=web_server&client_id=${process.env.BASECAMP_CLIENT_ID}&redirect_uri=${process.env.BASECAMP_REDIRECT_URL}&client_secret=${process.env.BASECAMP_CLIENT_SECRECT}&code=${code}`
      const { data } = await axiosInstance.post<IAuthTokenResponse>(`/token/${params}`)
      return data;
    } catch (error) {
      throw error;
    }
  }


}

export default new LauchpadClient();