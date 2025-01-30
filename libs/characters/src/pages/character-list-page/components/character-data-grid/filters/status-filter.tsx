import React from 'react';

import {
  Select,
  type SelectProps,
} from '@nx-microfrontend-workspace/components-ui';
import { STATUS } from '../../../../../rest-clients/rick-and-morty/types';
import { capitalize } from '@nx-microfrontend-workspace/utils';

const StatusFilter = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props: SelectProps, ref) => {
    const statusSelectOptions = React.useMemo(
      () => [
        { value: '', label: 'Filter by status' },
        ...Object.values(STATUS).map((el) => ({
          value: el,
          label: capitalize(el),
        })),
      ],
      []
    );

    return (
      <Select
        ref={ref}
        className="border p-2 rounded"
        options={statusSelectOptions}
        {...props}
      />
    );
  }
);

export default StatusFilter;
