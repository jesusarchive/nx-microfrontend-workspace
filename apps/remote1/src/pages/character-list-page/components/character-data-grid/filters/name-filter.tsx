import React from 'react';

import {
  Input,
  type InputProps,
} from '@nx-microfrontend-workspace/components-ui';

const NameFilter = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <Input
        ref={ref}
        className="border p-2 rounded"
        type="text"
        placeholder="Filter by name"
        {...props}
      />
    );
  }
);

export default NameFilter;
