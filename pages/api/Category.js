import Category from './categories.json'

export default function handler(req, res) {
    res.status(200).json(Category)
}