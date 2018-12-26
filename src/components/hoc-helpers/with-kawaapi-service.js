import React from 'react'
import { KawaapiServiceConsumer } from '../kawaapi-service-context'

const withKawaapiService = mapMethodsToProps => Wrapped => {
  return props => {
    return (
      <KawaapiServiceConsumer>
        {kawaapiService => {
          const seriviceProps = mapMethodsToProps(kawaapiService)

          return <Wrapped {...props} {...seriviceProps} />
        }}
      </KawaapiServiceConsumer>
    )
  }
}

export default withKawaapiService
