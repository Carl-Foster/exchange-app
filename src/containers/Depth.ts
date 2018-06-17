import { ViewStyle } from 'react-native'
import { connect } from 'react-redux'
import { Depth as DepthPresentation } from '../components/Depth'
import { getDepthAction } from '../store/actions'
import { RootState } from '../store/root-reducer'
import { Direction } from '../types/enums'

interface OwnProps {
    direction: Direction
    style: ViewStyle
}

const mapStateToProps = ({ depth }: RootState, { direction }: OwnProps) => ({
    orders: depth[direction],
})

const mapDispatchToProps = {
    getDepth: getDepthAction.request,
}

export type DepthProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & OwnProps
export const Depth = connect(mapStateToProps, mapDispatchToProps)(DepthPresentation)
