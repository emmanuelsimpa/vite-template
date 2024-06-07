declare module "*.svg?react" {
  import React = require("react");
  export const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement> & { style?: React.CSSProperties }
  >;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const src: any;
  export default src;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const content: string;
  export default content;
}
