import * as request from 'request'


const options = {
  headers: {
    'User-Agent': 'request'
  }
}

export class GithubApiService {
  getUserInfo(userName: string) {
    request.get(
      'https://api.github.com/users/' + userName,
      options,
      (error: any, response: any, body: any) => {
        console.log(body)
      }
    )
  }
}
