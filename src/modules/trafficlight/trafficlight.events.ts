export enum Events {
  initialized = "@portfall.io.trafficlight.initialized",
}

export type Handlers = {
  [Events.initialized]: () => void;
};
