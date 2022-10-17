export type MiniReactElementType = {
  type: keyof HTMLElementTagNameMap;
  props: {
    children: string | MiniReactElementType | MiniReactChildrenType;
  };
};
export type MiniReactChildrenType = (string | MiniReactElementType)[];
