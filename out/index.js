"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var _ = __importStar(require("lodash"));
var svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo('xkux8023', function (user) {
    svc.getRepos(user.login, function (repos) {
        var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forks_count * -1; }]);
        user.repos = sortedRepos;
    });
});
