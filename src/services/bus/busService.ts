import { string } from "prop-types";

export interface BusService {
    getBusPosts(): Promise<BusPost>;
  }
  
  export interface BusPost {
    LatestUpdate:string;
    Buses:Bus[];
  }
  
  export interface Bus {
    LineNumber:string;
    Destination:string;
    TimeTabledDateTime:string;
    ExpectedDateTime:string;
    DisplayTime:string;
    Deviations:string;
  }