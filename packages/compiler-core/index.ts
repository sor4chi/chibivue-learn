import { baseCompile } from "./compile";
import { CompilerOptions } from "./options";

export * from "./codegen";
export * from "./compile";
export * from "./parse";
export * from "./ast";

export function compile(template: string, option?: CompilerOptions) {
  const defaultOption: Required<CompilerOptions> = { isBrowser: true };
  if (option) Object.assign(defaultOption, option);
  return baseCompile(template, defaultOption);
}
