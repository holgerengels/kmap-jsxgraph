import { html, TemplateResult } from 'lit';
import '../src/kmap-jsxgraph.js';

export default {
  title: 'KmapJsxGraph',
  component: 'kmap-jsxgraph',
  argTypes: {
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  attributes?: string;
  script?: string;
}

const Template: Story<ArgTypes> = ({
  attributes = "{ boundingBox: [-2*Math.PI, 1.5, 2*Math.PI, -1.5] }",
  script = "this.board.create('functiongraph', [function(x) { return Math.sin(x) }, -2*Math.PI, 2*Math.PI]);",
}: ArgTypes) => html`
  <kmap-jsxgraph style="width: 300px; aspect-ratio: 2">
    <script type="none" slot="attributes">
      ${attributes}
    </script>
    <script type="none" slot="script">
      ${script}
    </script>
  </kmap-jsxgraph>
`;

export const Regular = Template.bind({});
