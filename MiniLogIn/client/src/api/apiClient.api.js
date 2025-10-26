

// api (url, endpoint, options)

export default async function apiClient(url, endpoint, options = {}){
    
    try {
        const response = await fetch(`${url}${endpoint}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options
            }
        }) ;
        
        if(!response.ok){
            throw new Error(`Http Error: ${response.status}`)
        }

        return response.json() ;
        
    } catch (error) {
        console.error("Network Error", error.message)
        return {error: true, message: error.message}
    }

    
}