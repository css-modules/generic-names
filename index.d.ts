interface Options {
  context: string;
  hashPrefix: string;
  regExp?: RegExp;
}

type Generator = (localName: string, filepath: string) => string;

declare function createGenerator(
  pattern: string,
  options?: Partial<Options>
): Generator;

export = createGenerator;
