import React, { Suspense, lazy, ComponentType } from 'react';

export default function loadable<T>(
  componentGetter: () => Promise<{ default: ComponentType<any> }>
) {
  return (props: T) => {
    const Component = lazy(componentGetter);
    return (
      <Suspense fallback>
        <Component {...props} />
      </Suspense>
    );
  }
}
