import * as React from "react";
import './Layout.less';
import Container from '@material-ui/core/Container';
import { MainNavigationMenu } from "../../components";

interface Props {
}

export class Layout extends React.Component<Props> {
  render() {
      return (
          <React.Fragment>
                  <Container className={'layout-body'}>
                      <MainNavigationMenu />
                      {this.props.children}
                  </Container>
          </React.Fragment>
      )
  }
}
export default Layout;
