import * as React from "react";
import { getBusService } from "../src/getServices";
import { BusPostDisplay } from "../src/components/BusPost"
import { BusPost } from "../src/services/bus/busService";
import moment from "moment";
import Head from "next/head";
import { List, Label } from "semantic-ui-react";

interface IndexProps {
  busPosts: BusPost;
}

export default function Index(props: IndexProps) {
  const busPosts = props.busPosts;
  const date = moment(props.busPosts.LatestUpdate).format("D MMMM HH:mm");

  return (
    <div>
          <Head>
      <title>Initial</title>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
      />
    </Head>
      <List divided relaxed>
      <List.Item>
      <Label color='red' horizontal>
      Latest update: 
      </Label>
      {date}
      </List.Item>
     {busPosts.Buses.map((bus) => (
       <BusPostDisplay busPost={bus}></BusPostDisplay>
      ))}
        </List>
      </div>
  );
}

Index.getInitialProps = async function(): Promise<IndexProps> {
  const services = getBusService();
  const posts = await services.getBusPosts();

  return { busPosts: posts };
};