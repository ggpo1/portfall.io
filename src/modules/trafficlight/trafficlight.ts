import { TypedEmitter } from "tiny-typed-emitter";
import { Events, Handlers } from "./trafficlight.events";

export class Trafficlight extends TypedEmitter<Handlers> {
  public readonly events = Events;

  constructor(private container: HTMLDivElement) {
    super();
  }

  private subscribe = () => {};
  private unsubscribe = () => {};

  public readonly destroy = () => {
    this.unsubscribe();
  };
}
