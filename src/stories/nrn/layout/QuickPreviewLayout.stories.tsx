import {
  Meta,
  Story,
} from '@storybook/react/types-6-0';
import React from 'react';
import { ExplanationTooltipOverlay } from '../../../components/pageLayouts/PreviewModeBanner';
import QuickPreviewLayout, { Props } from '../../../components/pageLayouts/QuickPreviewLayout';

export default {
  title: 'Next Right Now/Layout/QuickPreviewLayout',
  component: QuickPreviewLayout,
  argTypes: {},
} as Meta;

export const DefaultExample: Story<Props> = () => {
  return (
    // @ts-ignore
    <QuickPreviewLayout
      ExplanationTooltipOverlay={ExplanationTooltipOverlay}
      LeftActions={null}
      headProps={{
        seoTitle: 'Some title',
      }}
      pageName={'QuickPreviewLayout.stories'}
    >
      <div>
        Component displayed in quick preview on external 3rd party site
      </div>
    </QuickPreviewLayout>
  );
};
