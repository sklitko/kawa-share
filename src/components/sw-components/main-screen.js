import React from 'react'
import MainInfo from '../main-info'
import { withKawaapiService } from '../hoc-helpers'

const MainScreen = props => {
  return <MainInfo {...props} />
}

const mapMethodsToProps = kawaapiService => {
  return {
    getData: kawaapiService.getProduct
  }
}

export default withKawaapiService(mapMethodsToProps)(MainScreen)
