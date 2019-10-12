import React from 'react'

type IHOCPropForwardRef<T> = T & { forwardRef: React.Ref<unknown> }

export default function <T>(Component: React.ComponentType<T>) {

  function WrappedComponent(props: IHOCPropForwardRef<T>) {
    const { forwardRef, ...rest } = props as any
    return <Component {...rest}></Component>
  }

  return React.forwardRef((props: T, ref) => {
    return <WrappedComponent {...props} forwardRef={ref}></WrappedComponent>
  })
}