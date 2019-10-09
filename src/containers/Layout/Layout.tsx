import * as React from "react";
import './Layout.less';
import Container from '@material-ui/core/Container';

interface Props {
}

export class Layout extends React.Component<Props> {
  render() {
      return (
          <React.Fragment>
                  <Container className={'layout-body'}>
                      {this.props.children}
                  </Container>
          </React.Fragment>
      )
  }
}
export default Layout;
