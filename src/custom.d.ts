// src/custom.d.ts
declare module '*.svg?component' {
    import * as React from 'react';
    const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default Component;
  }
  