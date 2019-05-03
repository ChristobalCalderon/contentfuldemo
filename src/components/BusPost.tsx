import React from "react";
import { Bus } from "../services/bus/busService";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";

interface BusPostProps {
  busPost: Bus;
}

export function BusPostDisplay(props: BusPostProps) {
  const bus = props.busPost;

  return (
<>
    <List.Item>
      <List.Icon name='bus' size='large' verticalAlign='middle' />
      <List.Content verticalAlign='middle'>
        <List.Header as='a'>Destination: {bus.Destination}</List.Header>
        <List.Description>DisplayTime: {bus.DisplayTime}</List.Description>
      </List.Content>
    </List.Item>
</>
  );
}
