import languageColors from './data/colors.json'
const userState = {
   includesForks: false,
   language: 'all',
}
async function getGithub(username) {
    try {
        const r = await fetch(`https://api.github.com/users/${username}`)

        if (r.status === 404) {
            console.log('pseudo introuvable ou inexistant')
            return
        }
        if (r.status === 403 || r.status === 429) {
            console.log('quota API dépassé, réessayez plus tard')
            return
        }

        const data = await r.json()
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`)
        const repos = await res.json()

        if (repos.length === 0) {
            console.log('aucun repo disponible pour cet utilisateur')
            return
        }

        const totalStars = repos.reduce((total, repo) => total + repo.stargazers_count, 0)

        showInfos(data.name, data.login, data.followers, data.public_repos, totalStars, data.location, data.avatar_url)
        console.log(data)
        console.log(repos)

    } catch (error) {
        console.log('erreur réseau', error)
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

if (urlUsername) {
    searchbar.value = urlUsername
    getGithub(urlUsername)
}

function showInfos(name, username, followers, repos, stars, location, avatar) {
    const profileAvatar = document.getElementById('profile-avatar')
    const profileName = document.getElementById('profile-name')
    const profileFollowers = document.getElementById('profile-followers')
    const profileRepos = document.getElementById('profile-repos')
    const profileLocation = document.getElementById('profile-location')

    profileAvatar.src = avatar
    profileName.textContent = name || username
    profileFollowers.textContent = `${followers} followers`
    profileRepos.textContent = `${repos} repos publics : ${stars} stars`
    profileLocation.textContent = location || ''
}
