import { GithubApiService } from './GithubApiService'
import * as _ from 'lodash'
import { User } from './User'
import { Repo } from './Repo'

let svc: GithubApiService = new GithubApiService()
svc.getUserInfo('xkux8023', (user: User) => {
  svc.getRepos(user.login, (repos: Repo[]) => {
    let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forks_count * -1])
    user.repos = sortedRepos
  })
})
