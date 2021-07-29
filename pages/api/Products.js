import Products from './products.json'

export default function handlerProducts(req, res) {
  res.status(200).json(Products)
}
