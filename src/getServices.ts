import { TafikLabBusService } from "./services/bus/trafikLabBusService";

export function getBusService(): TafikLabBusService {
    const service = new TafikLabBusService();
    return service;
  }

