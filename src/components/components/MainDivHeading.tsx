import { GrStatusGoodSmall } from 'react-icons/gr'

export const MainDivHeading = ({
  BEPComp, ERCComp
}: { BEPComp: boolean, ERCComp: boolean }) => (
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
      <button className="connect-web3-btn">
        <p>Connect Web3</p>
        <GrStatusGoodSmall className="web3-status-icon" style={ {
          color: '#ff4444'
        } }/>
      </button>
    </div>
  </h3>
)
