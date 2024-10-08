import { Octokit } from "octokit"


const octokit = new Octokit({
  auth: '', // запишите в пустых кавычках свой 'Octokit token' выданный github-ом
})

export async function getTrendingRepositories() {
  try {
    const response = await octokit.request('GET /search/repositories', {
      q: `all`,
      sort: 'stars',
      order: 'desc',
      per_page: 10,
    })

    const data = []

    response.data.items.forEach((repo, index) => {
      data.push({
        name: repo.name,
        starcount: repo.stargazers_count,
        url: repo.html_url
      })
    })
    return data
  }
  catch (error) {
    console.error(`Ошибка: ${error.message}`)
  }
}


export async function getAllRepositories() {
  try {
    const response = await octokit.request('GET /search/repositories', {
      q: `all`,
      sort: 'updated',
      order: `desc`,
      per_page: 10,
    })
    const data = []

    response.data.items.forEach((repo) => {
      data.push({
        name: repo.name,
        starcount: repo.stargazers_count,
        url: repo.html_url
      })
    })
    return data
  
  } catch (error) {
    console.error(error)
  }
}


export async function getRepoByOwner(value = 'octocat') {
  try {
    const response = await octokit.request('GET /users/{username}/repos', {
      username: value,
      type: 'public',
      sort: 'created',
      direction: 'desc',
      per_page: 5,
    })

    const data = []
    response.data.forEach(repo => {
      data.push({
        name: repo.name,
        starcount: repo.stargazers_count,
        url: repo.html_url
      })
    })
    return data


  } catch (error) {
    console.error(error.message)
  }
}


export async function getRepoByName(value = 'octocat') {
  try {
    const response = await octokit.request('GET /search/repositories', {
      q: value, // Имя репозитория, которое вы ищете
      per_page: 5, // Ограничить количество возвращаемых результатов
    })
    const data = []
    response.data.items.forEach(repo => {
      data.push({
        name: repo.name,
        starcount: repo.stargazers_count,
        url: repo.html_url
      })
    })
    return data

  } catch (error) {
    console.error(error.message)
  }
}

