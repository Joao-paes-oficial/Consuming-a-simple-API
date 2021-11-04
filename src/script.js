async function getContent() {
    try {
        const promise = await fetch('http://localhost:8000/')
        const data = await promise.json()

        show(data)
    } catch (error) {
        console.error(error)
    }
}

getContent()

function show(users) {
    let output = ''

    for( let user of users) {
        output += `<li>${user.name}</li>`
    }

    document.querySelector('#main-content').innerHTML = output
}