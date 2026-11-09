//import languageColors from './data/colors.json';

const form = document.getElementById('github-form')
const searchbar = document.getElementById('github-username')

async function getGithub(username) {
    try {
        const r = await fetch(`https://api.github.com/users/${username}`)

        if (!r.ok) {
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