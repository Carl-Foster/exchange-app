import { connect } from 'react-redux'
import { TradeForm as TradeFormPresentation } from '../components/TradeForm'
import { placeTradeAction, tradeFormChange } from '../store/actions'
import { RootState } from '../store/root-reducer'

const mapStateToProps = ({ trade }: RootState) => ({
    ...trade.form,
})

const mapDispatchToProps = {
    placeOrder: placeTradeAction.request,
    handleChange: tradeFormChange,
}

export type TradeProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps
export const TradeForm = connect(mapStateToProps, mapDispatchToProps)(TradeFormPresentation)
