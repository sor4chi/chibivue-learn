export const enum NodeTypes {
  ELEMENT,
  TEXT,
  ATTRIBUTE,
}

export interface Node {
  type: NodeTypes;
  loc: SourceLocation;
}

export interface ElementNode extends Node {
  type: NodeTypes.ELEMENT;
  tag: string;
  props: Array<AttributeNode>;
  children: TemplateChildNode[];
  isSelfClosing: boolean;
}

export interface AttributeNode extends Node {
  type: NodeTypes.ATTRIBUTE;
  name: string;
  value: TextNode | undefined;
}

export type TemplateChildNode = ElementNode | TextNode;

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
