export default class KawaapiService {
  _apiBase = ' http://kawaapi.gumione.pro/api'
  _contentBase = 'http://kawa.gumione.pro'

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
  }

  getProduct = async id => {
    const product = await this.getResource(`/catalog/item/${id}`)
    return this._transformProduct(product.item)
  }

  getProductImage = url => {
    return `${this._contentBase}${url}`
  }

  _transformProduct = product => {
    return {
      id: product.id,
      name: product.name,
      code: product.code,
      price: product.price,
      caption: product.caption,
      file: product.file,
      roast: product.roast_human,
      sort: product.sort_human,
      arabic_percent: product.arabic_percent,
      imgUrl: product.file
    }
  }
}
