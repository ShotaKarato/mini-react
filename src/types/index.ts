// types
export type MiniReactChildType = {
  children: string | MiniReactElementType | (string | MiniReactElementType)[];
};
export type MiniReactElementType = {
  type: string;
  props: MiniReactChildType;
};
export type MiniReactChildrenType = (string | MiniReactElementType)[];
