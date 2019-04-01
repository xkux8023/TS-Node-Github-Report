import { GithubApiService } from './GithubApiService'
import { User } from './User'
import { Repo } from './Repo'

let svc: GithubApiService = new GithubApiService()
svc.getUserInfo('xkux8023', (user: User) => {
  console.log(user)
  console.log('name: ', user.login)
})
svc.getRepos('hfpp2012', (repos: Repo[]) => {
  console.log(repos)
})
