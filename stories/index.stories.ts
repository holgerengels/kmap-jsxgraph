import { html, TemplateResult } from 'lit';
import '../src/kmap-jsxgraph.js';

export default {
  title: 'KmapJsxGraph',
  component: 'kmap-jsxgraph',
  argTypes: {
    title: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  counter?: number;
  textColor?: string;
  slot?: string;
}

const Template: Story<ArgTypes> = ({
  title = 'Sinus',
  counter = 5,
  textColor,
  slot = "",
}: ArgTypes) => html`
  <kmap-jsxgraph
    style="--kmap-jsxgraph-text-color: ${textColor || 'black'}"
    .title=${title}
    .counter=${counter}
  >
    <script type="none" slot="attributes">
      {
        boundingBox: [-2*Math.PI, 1.5, 2*Math.PI, -1.5],
      }
    </script>
    <script type="none" slot="script">
      this.board.create('functiongraph', [function(x) { return Math.sin(x) }, -2*Math.PI, 2*Math.PI]);
    </script>
    ${slot}
  </kmap-jsxgraph>
`;

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: "this.board.create('functiongraph', [function(x) { return Math.sin(x) }, -2*Math.PI, 2*Math.PI]);",
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
