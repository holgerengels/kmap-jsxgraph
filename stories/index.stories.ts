import { html, TemplateResult } from 'lit';
import '../src/kmap-jsxgraph.js';

export default {
  title: 'KmapJsxGraph',
  component: 'kmap-jsxgraph',
  argTypes: {
    boundingBox: { control: 'text' },
    axis: { control: 'boolean' },
    grid: { control: 'boolean' },
    showNavigation: { control: 'boolean' },
    showScreenshot: { control: 'boolean' },
    showZoom: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  boundingBox?: string;
  axis?: boolean;
  grid?: boolean;
  showNavigation?: boolean;
  showScreenshot?: boolean;
  showZoom?: boolean;
  attributes?: string;
  script?: string;
}

const Template: Story<ArgTypes> = ({
  boundingBox = undefined,
  axis = true,
  grid = true,
  showNavigation = false,
  showScreenshot = false,
  showZoom = false,
  attributes = "{ boundingBox: [-2*Math.PI, 1.5, 2*Math.PI, -1.5] }",
  script = "this.board.create('functiongraph', [function(x) { return Math.sin(x) }, -2*Math.PI, 2*Math.PI]);",
}: ArgTypes) => html`
  <kmap-jsxgraph
    boundingBox="${boundingBox}"
    ?axis="${axis}"
    ?grid="${grid}"
    ?show="${showNavigation}"
    ?showScreenshot="${showScreenshot}"
    ?showZoom="${showZoom}"
  >
    <script type="none" slot="attributes">
      ${attributes}
    </script>
    <script type="none" slot="script">
      ${script}
    </script>
  </kmap-jsxgraph>
`;

export const Regular = Template.bind({});
