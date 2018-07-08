import { Box, Container } from 'bloomer'
import * as React from 'react'
import { WithRouterProps } from '../../routes'

export class Dashboard extends React.Component<WithRouterProps> {
  public render() {
    return (
      <Container>
        <Box>Hello</Box>
      </Container>
    )
  }
}
export default Dashboard
