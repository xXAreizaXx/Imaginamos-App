export function getProducts() {
    return (
        fetch('https://chukwudi.vercel.app/api/Products')
            .then(res => res.json())
    )
}

export function getCategory() {
    return (
        fetch('https://chukwudi.vercel.app/api/Category')
            .then(res => res.json())
    )
}

