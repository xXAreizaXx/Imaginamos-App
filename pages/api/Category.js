import Category from './categories.json'

export default function handlerCategory(req, res) {
    res.status(200).json(Category)
}