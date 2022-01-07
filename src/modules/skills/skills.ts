import { TypedEmitter } from "tiny-typed-emitter";
import { Events, Handlers } from "./skills.events";

export class Skills extends TypedEmitter<Handlers> {
  public readonly events = Events;

  constructor(private readonly container: HTMLDivElement) {
    super();
  }
}
