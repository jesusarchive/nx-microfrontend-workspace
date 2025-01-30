import { render } from '@testing-library/react';

import ComponentsUi from './components-ui';

describe('ComponentsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsUi />);
    expect(baseElement).toBeTruthy();
  });
});
