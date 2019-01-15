import React, { Component } from 'react'

export default class SecondInfo extends Component {
  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId || this.props.getData !== prevProps.getData) {
      this.updateItem()
    }
  }

  updateItem() {
    const { itemId, getData } = this.props

    if (!itemId) {
      return
    }

    getData(itemId).then(item => {
      this.setState({
        item
      })
    })
  }
  render() {
    const { item } = this.state

    if (!item) {
      return <span>not found!</span>
    }

    return (
      <div className="wrapper">
        <h4>Описание</h4>
        <div className="caption" dangerouslySetInnerHTML={{ __html: item.text }} />
        <div>Вес: {item.weight} г</div>
        <div>Упаковка: {item.package}</div>
        <div>Страна производитель: {item.country}</div>
      </div>
    )
  }
}
