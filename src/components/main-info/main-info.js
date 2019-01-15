import React, { Component } from 'react'
import Rate from 'rc-rate'

import './rate.scss'

export default class MainInfo extends Component {
  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.updateItem()
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props

    if (!itemId) {
      return
    }

    getData(itemId).then(item => {
      this.setState({
        item,
        image: getImageUrl(item.imgUrl)
      })
    })
  }
  render() {
    const { item, image } = this.state

    if (!item) {
      return <span>not found!</span>
    }

    return (
      <React.Fragment>
        {/* <div className="spacer" /> */}
        <div className="wrapper">
          <img src={image} alt={item.name} className="img-fluid mx-auto image-product" />
          <h1>{item.name}</h1>
          <div className="desctiption">
            {item.sort} {item.arabic_percent}%
          </div>
          <div className="roast">Обжарка {item.roast}</div>
          <div className="code">Код товара: {item.code}</div>
          <div className="price">
            <span /> {item.price} грн
          </div>
          <Rate
            defaultValue={3}
            style={{ fontSize: 20 }}
            allowClear={false}
            allowHalf
            character={<i className="material-icons">star</i>}
          />
        </div>
      </React.Fragment>
    )
  }
}
