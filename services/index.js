export function getProducts() {
    return (
        fetch('api/Products')
            .then(res => res.json())
    )
}

export function getCategory() {
    return (
        fetch('api/Category')
            .then(res => res.json())
    )
}

