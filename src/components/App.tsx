import React from 'react'
import { Sidebar } from './Sidebar'
import { GrStatusGoodSmall } from 'react-icons/gr'

const Circles = () => (
  <>
    <div className="circle-1"></div>
    <div className="circle-2"></div>
  </>
)

const MainDivHeading = () => (
  <h3 className="heading">
    <div className="status">
      <h1>Deploy ERC20</h1>
      <button className="connect-web3-btn">
        <p>Connect Web3</p>
        <GrStatusGoodSmall className="web3-status-icon" style={ {
          color: '#ff4444'
        } }/>
      </button>
    </div>
  </h3>
)

const DeployTokenCard = () => (
  <div className="deploy-token-card">
    <div>

    </div>
  </div>
)

const MainDiv = () => (
  <div className="main-content">
    <MainDivHeading />
    <DeployTokenCard />
  </div>
)

const TopNav = () => (
  <div className="top-nav">
    
  </div>
)

interface IAppState {
  ERCComp: boolean
  BEPComp: boolean
}

export class App extends React.Component<{}, IAppState> {
  state = {
    ERCComp: true,
    BEPComp: false
  }

  switchComp = (
    which: 'ERCComp' | 'BEPComp'
  ) => {
    const comps = {
      ERCComp: false,
      BEPComp: false
    }

    comps[which] = true

    console.log(comps)

    this.setState(comps)
  }

  render = () => {
    const activeChange = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      which: 'ERCComp' | 'BEPComp'
    ) => {
      event.preventDefault()
      this.switchComp(which)
    }

    return (
      <main>
        <section className="glass">
          <Sidebar activeChange={activeChange}/>
          <div className="container">
            <TopNav />
            <MainDiv />
          </div>
        </section>
        <Circles />
      </main>
    )
  }
}