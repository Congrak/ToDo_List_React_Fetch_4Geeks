
export const getAll = async () => {

    fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
        method: "PUT",
        body: JSON.stringify([]),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const res = await fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = res.json()
    console.log(data)

    return data
}

export async function updateAll(props) {

    await fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
        method: "PUT",
        body: JSON.stringify(props),
        headers: {
            "Content-Type": "application/json"
        }
    })
}
