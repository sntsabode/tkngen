import { GrStatusGoodSmall } from 'react-icons/gr'

export const MainDivHeading = ({
  BEPComp, ERCComp,
  connectWeb3, Web3Status
}: {
  BEPComp: boolean
  ERCComp: boolean
  Web3Status: string
  connectWeb3: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>
}) => (
  <h3 className="heading">
    <div className="status">
      <div>
        { 
          ERCComp && <>
            <h1>Deploy ERC20</h1>
            <p>Fill in the form to deploy your ERC20 token!</p>
          </>
        }
        { 
          BEPComp && <>
            <h1>Deploy BEP20</h1>
            <p>Fill in the form to deploy your BEP20 token!</p>
          </>
        }
      </div>
      <button
        id="main-connect-web3-btn"
        className="connect-web3-btn secondary-btn-tkn"
        onClick={connectWeb3}
      >
        <p>Connect Web3</p>
        <GrStatusGoodSmall className="web3-status-icon" style={ {
          color: Web3Status
        } }/>
      </button>
    </div>
  </h3>
)
