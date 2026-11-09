import languageColors from './data/colors.json'
const userState = {
   includesForks: false,
   language: 'all',
}
async function getGithub(username) {
    try {
        const r = await fetch(`https://api.github.com/users/${username}`)

        if (!r.ok) {
            showState('error')
            return
        }
        const data = await r.json()
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=30&sort=updated&direction=desc`)
        const repos = await res.json()

        console.log(repos)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

function filterRepos(repos, options) {
    return repos.filter(repo =>{
        if(!options.includesForks && repo.fork){
            return false
        }
        if(options.language && options.language !== 'all' && repo.language !== options.language) {
            return false
        } 
        return true
    })   
}

