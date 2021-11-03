async function getContent() {
    try {
        const promise = await fetch('http://localhost:4567/')
        console.log(promise)
    } catch (error) {
        console.error(error)
    }
}

getContent()