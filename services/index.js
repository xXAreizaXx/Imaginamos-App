export function getProducts() {
    return (
        fetch('http://localhost:3000/api/Products')
            .then(res => res.json())
    )
}

export function getCategory() {
    return (
        fetch('http://localhost:3000/api/Category')
            .then(res => res.json())
    )
}

