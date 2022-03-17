const DB_URL = 'https://react-crud-15g-default-rtdb.firebaseio.com'

export default {
    getAllSaint: async () => {
        let response = await fetch(`${DB_URL}/team3.json`)
        return await response.json()
    },
    saveSaint: async saintData => {
        let response = await fetch(`${DB_URL}/team3.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(saintData)
        })
        return await response.json()
    },
    deleteSaint: async saintData => {
        let response = await fetch(`${DB_URL}/team3.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    }
}