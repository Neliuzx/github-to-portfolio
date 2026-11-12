const languageColors = await fetch('./data/colors.json').then(r => r.json())
const form = document.getElementById('github-form')
const searchbar = document.getElementById('github-username')
const forksCheckbox = document.getElementById('show-forks')
const languageSelect = document.getElementById('language-filter')
const statusMsg = document.getElementById('status-message')

const userState = {
    includesForks: false,
    language: 'all',
}

let allRepos = [] 

async function getGithub(username) {
    try {
        const r = await fetch(`https://api.github.com/users/${username}`)

        if (r.status === 404) {
            statusMsg.textContent = 'Pseudo introuvable ou inexistant'
            return
        }
        if (r.status === 403 || r.status === 429) {
            statusMsg.textContent = 'Quota API dépassé, réessayez plus tard'
            return
        }

        const data = await r.json()
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`)
        const repos = await res.json()
        allRepos = repos

        if (repos.length === 0) {
            statusMsg.textContent = 'Aucun repo disponible pour cet utilisateur'
            return
        }

        const totalStars = repos.reduce((total, repo) => total + repo.stargazers_count, 0)

        showInfos(data.name, data.login, data.followers, data.public_repos, totalStars, data.location, data.avatar_url, data.following, data.created_at)
        console.log(data)
        console.log(repos)

    } catch (error) {
        console.log('erreur réseau', error)
    }
    return
}

function filterRepos(repos, options) {
    return repos.filter(repo => {
        if (!options.includesForks && repo.fork) {
            return false
        }
        if (options.language && options.language !== 'all' && repo.language !== options.language) {
            return false
        }
        return true
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = searchbar.value.trim()
    if (!username) return

    const url = new URL(window.location)
    url.searchParams.set('username', username)
    history.pushState({}, '', url)

    getGithub(username)
})

const params = new URLSearchParams(window.location.search)
const urlUsername = params.get('username')

if (urlUsername) {
    searchbar.value = urlUsername
    getGithub(urlUsername)
}

function showInfos(name, username, followers, repos, stars, location, avatar, following, createdAt) {
    const profileAvatar = document.getElementById('profile-avatar')
    const profileName = document.getElementById('profile-name')
    const profileFollowers = document.getElementById('profile-followers')
    const profileRepos = document.getElementById('profile-repos')
    const profileLocation = document.getElementById('profile-location')
    const profileFollowing = document.getElementById('profile-following')
    const profileCreatedAt = document.getElementById('profile-created')

    profileCreatedAt.textContent = `Compte crée le: ${new Date(createdAt).toLocaleDateString('fr-FR')}`
    profileFollowing.textContent = `${following} following`
    profileAvatar.src = avatar
    profileName.textContent = name || username
    profileFollowers.textContent = `${followers} followers`
    profileRepos.textContent = `${repos} repos publics : ${stars} stars`
    profileLocation.textContent = location || ''
}

function displayRepositories(repos) {
 const container = document.getElementById('repositories-container')
 container.innerHTML = ''
 const template = document.getElementById('repository-template')
 repos.forEach(repo => {
  const card = template.content.cloneNode(true)
})
}


forksCheckbox.addEventListener('change', (e) => {
    userState.includesForks = e.target.checked
    return
})

languageSelect.addEventListener('change', (e) => {
    userState.language = e.target.value
    return
})
