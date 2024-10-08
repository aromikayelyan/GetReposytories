const url = "http://localhost:5501/get"

export async function getAllRepositories() {
    try {
        const response = fetch(url + '/getall')
            .then(response => response.json())
            .then(json => json)
        const data = await response

        return data
    } catch (error) {
        console.log(error)
    }
}

export async function getRepoByName(value) {
    try {
        const response = await fetch(url + '/getbyname', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ name: value })
        })
            .then(response => response.json())
            .then(json => json)
        const data = await response


        return data
    } catch (error) {
        console.log(error)
    }
}

export async function getRepoByOwner(value) {
    try {
        const response = await fetch(url + '/getbyowner', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ name: value })
        })
            .then(response => response.json())
            .then(json => json)
        const data = await response

        return data
    } catch (error) {
        console.log(error)
    }
}


export async function getTrendingRepositories() {
    try {
        const response = fetch(url + '/gettrend')
            .then(response => response.json())
            .then(json => json)
        const data = await response

        return data
    } catch (error) {
        console.log(error)
    }
}
