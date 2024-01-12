export const enum NodeTypes {
  ELEMENT,
  TEXT,
  INTERPOLATION,
  ATTRIBUTE,
  DIRECTIVE,
}

export interface Node {
  type: NodeTypes;
  loc: SourceLocation;
}

export interface ElementNode extends Node {
  type: NodeTypes.ELEMENT;
  tag: string;
  props: Array<AttributeNode | DirectiveNode>;
  children: TemplateChildNode[];
  isSelfClosing: boolean;
}

export interface DirectiveNode extends Node {
  type: NodeTypes.DIRECTIVE;
  name: string;
  arg: string;
  exp: string;
}

export interface AttributeNode extends Node {
  type: NodeTypes.ATTRIBUTE;
  name: string;
  value: TextNode | undefined;
}

export type TemplateChildNode = ElementNode | TextNode | InterpolationNode;

export interface InterpolationNode extends Node {
  type: NodeTypes.INTERPOLATION;
  content: string;
}

export interface TextNode extends Node {
  type: NodeTypes.TEXT;
  content: string;
}

export interface SourceLocation {
  start: Position;
  end: Position;
  source: string;
}

export interface Position {
  offset: number;
  line: number;
  column: number;
}
