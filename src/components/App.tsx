import React from 'react'
import { Sidebar } from './Sidebar'
import { Circles } from './components/utils/Circles'
import { MainDivHeading } from './components/MainDivHeading'
import { IMintableBurnableSwitches } from './components/MintableBurnableSwitches'
import { MintableBurnableSwitches } from './components/MintableBurnableSwitches'
import { DecimalsTotalSupplySliders } from './components/DecimalsTotalSupplySliders'

type IDeployTokenCard = IMintableBurnableSwitches & {
  handleSliderChange: (
    event: React.ChangeEvent<{}>,
    which: 'Decimals' | 'TotalSupply',
    newValue: number | number[]
  ) => void 
}

const DeployTokenCard = ({
  mintableChecked,
  burnableChecked,
  handleSwitchChange,
  handleSliderChange
}: IDeployTokenCard) => (
  <div className="deploy-token-card">
    <MintableBurnableSwitches
      mintableChecked={mintableChecked}
      burnableChecked={burnableChecked}
      handleSwitchChange={handleSwitchChange}
    />
    <DecimalsTotalSupplySliders
      handleSliderChange={handleSliderChange}
    />
    <div className="deploy-token-btn-div">
      <button className="deploy-token-btn">NEXT</button>
    </div>
  </div>
)

const MainDiv = ({
  mintableChecked,
  burnableChecked,
  handleSwitchChange,
  handleSliderChange,
  ERCComp,
  BEPComp
}: IDeployTokenCard & {
  ERCComp: boolean
  BEPComp: boolean
}) => (
  <div className="main-content">
    <MainDivHeading
      ERCComp={ERCComp}
      BEPComp={BEPComp}
    />
    <DeployTokenCard 
      mintableChecked={mintableChecked}
      burnableChecked={burnableChecked}
      handleSwitchChange={handleSwitchChange}
      handleSliderChange={handleSliderChange}
    />
  </div>
)

const TopNav = () => (
  <div className="top-nav">
    
  </div>
)

interface IAppState {
  URL: string
  ERCComp: boolean
  BEPComp: boolean
  MintableChecked: boolean
  BurnableChecked: boolean
  TokenName: string
  TokenSymbol: string
  Decimals: number
  TotalSupply: number
}

const URLs = {
  ERC20: {
    Standard: 'http://localhost:9000/ERC-20/Standard'
  },

  BEP20: {
    Standard: 'http://localhost:9000/BEP-20/Standard'
  }
}

export class App extends React.Component<{}, IAppState> {
  state = {
    URL: URLs.ERC20.Standard,
    ERCComp: true,
    BEPComp: false,
    MintableChecked: false,
    BurnableChecked: true,
    TokenName: '',
    TokenSymbol: '',
    Decimals: 18,
    TotalSupply: 100000
  }

  render = () => {
    const activeChange = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      which: 'ERCComp' | 'BEPComp'
    ) => {
      event.preventDefault()
      if (which === 'ERCComp') {
        const bool = !this.state.ERCComp ? true : false
        this.setState({
          ...this.state,
          ERCComp: bool,
          BEPComp: !bool,
          URL: URLs.ERC20.Standard
        })
      } else {
        const bool = !this.state.BEPComp ? true : false
        this.setState({
          ...this.state,
          BEPComp: bool,
          ERCComp: !bool,
          URL: URLs.BEP20.Standard
        })
      }
    }

    const handleSwitchChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      which: 'MintableChecked' | 'BurnableChecked'
    ) => {
      event.preventDefault()
      this.setState({
        ...this.state, [which]: this.state[which] ? false : true
      })
    }

    const handleSliderChange = (
      event: React.ChangeEvent<{}>,
      which: 'Decimals' | 'TotalSupply',
      newValue: number | number[]
    ) => {
      event.preventDefault()
      this.setState({
        ...this.state, [which]: newValue
      })
    }

    return (
      <main>
        <section className="glass">
          <Sidebar
            activeChange={activeChange}
            ERCComp={this.state.ERCComp}
            BEPComp={this.state.BEPComp}
          />
          <div className="container">
            <TopNav />
            <MainDiv
              mintableChecked={this.state.MintableChecked}
              burnableChecked={this.state.BurnableChecked}
              handleSwitchChange={handleSwitchChange}
              handleSliderChange={handleSliderChange}
              ERCComp={this.state.ERCComp}
              BEPComp={this.state.BEPComp}
            />
          </div>
        </section>
        <Circles />
      </main>
    )
  }
}