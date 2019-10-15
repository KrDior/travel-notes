import * as React from 'react';
import './Layout.less';
import Container from '@material-ui/core/Container';
import { RunBot } from '../../components';

type Props = {};
type State = {};

export default class Layout extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <Container className={'layout-body'}>{this.props.children}</Container>
        <RunBot />
      </React.Fragment>
    );
  }
}
