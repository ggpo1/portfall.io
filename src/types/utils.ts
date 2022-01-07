export namespace Utils {
  export interface Identified {
    id: number;
  }

  export class Collection<I extends Identified> {
    public list: I[];

    constructor(initialValue: Collection<I>["list"]) {
      this.list = initialValue;
    }

    public readonly findById = (id: number) => {
      return this.list.find((item: I) => item.id === id);
    };
  }
}
