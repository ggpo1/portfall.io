import { Store, Event } from "effector";

export namespace Utils {
  export interface IStore<T, E, H> {
    readonly store: Store<T>;
    readonly events: E;
    readonly hooks: H;
    readonly destroy?: () => void;
  }

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
