import { GithubApiService } from './GithubApiService'
import { User } from './User';

let svc: GithubApiService = new GithubApiService()
svc.getUserInfo('xkux8023', (user: User) => {
  console.log(user)
  console.log('name: ', user.login)
})
