import React from 'react'
import MainInfo from '../main-info'
import SecondInfo from '../second-info'
import { withKawaapiService } from '../hoc-helpers'

const MainScreen = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <MainInfo {...props} />
          <SecondInfo {...props} />
        </div>
      </div>
    </div>
  )
}

const mapMethodsToProps = kawaapiService => {
  return {
    getData: kawaapiService.getProduct,
    getImageUrl: kawaapiService.getProductImage
  }
}

export default withKawaapiService(mapMethodsToProps)(MainScreen)
