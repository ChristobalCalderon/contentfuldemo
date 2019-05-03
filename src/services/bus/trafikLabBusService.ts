import { BusService, BusPost } from "./busService";
import fetch from 'isomorphic-unfetch'
import { trafikLabConfig } from "../trafikLabConfig";

export class TafikLabBusService implements BusService {

  async getBusPosts(): Promise<BusPost> {
    const res = await fetch(trafikLabConfig.baseUrl+"?key="+trafikLabConfig.key+"&siteid=4113&timewindow=60")

    const data = await res.json()

    console.log(data.ResponseData.Buses);

    return this.convertEntryToBlogPost(data);;
  }

  private convertEntryToBlogPost(item: any): BusPost {
    const responseData: any = item.ResponseData;

    return {
        LatestUpdate:responseData.LatestUpdate,
        Buses:responseData.Buses
    };
  }
}
