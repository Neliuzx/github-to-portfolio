import languageColors from './data/colors.json'

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

