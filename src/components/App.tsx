import React from 'react'
import { Sidebar } from './Sidebar'
import { Circles } from './components/utils/Circles'
import { TokenNameSymbolModal } from './components/TokenNameSymbolModal'
import { MainDiv } from './Main'

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
  ModalOpen: boolean
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
    TotalSupply: 100000,
    ModalOpen: false
  }

  render = () => {
    return (
      <main>
        <section className="glass">
          <Sidebar
            activeChange={this.handlers.activeChange}
            ERCComp={this.state.ERCComp}
            BEPComp={this.state.BEPComp}
          />
          <div className="container">
            <TopNav />
            <MainDiv
              mintableChecked={this.state.MintableChecked}
              burnableChecked={this.state.BurnableChecked}
              handleSwitchChange={this.handlers.handleSwitchChange}
              handleSliderChange={this.handlers.handleSliderChange}
              ERCComp={this.state.ERCComp}
              BEPComp={this.state.BEPComp}
              openTknNameSymModal={this.handlers.openTknNameSymModal}
            />
            <TokenNameSymbolModal
              modalOpen={this.state.ModalOpen}
              setOpenClose={this.handlers.setTokenNameSymModalOpenClose}
              handleOnchange={this.handlers.handleTknNameSymOnChange}
              TokenName={this.state.TokenName}
              TokenSymbol={this.state.TokenSymbol}
            />
          </div>
        </section>
        <Circles />
      </main>
    )
  }

  private handlers = ({
    activeChange: (
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
    },

    handleSwitchChange: (
      event: React.ChangeEvent<HTMLInputElement>,
      which: 'MintableChecked' | 'BurnableChecked'
    ) => {
      event.preventDefault()
      this.setState({
        ...this.state, [which]: this.state[which] ? false : true
      })
    },

    handleSliderChange: (
      event: React.ChangeEvent<{}>,
      which: 'Decimals' | 'TotalSupply',
      newValue: number | number[]
    ) => {
      event.preventDefault()
      this.setState({
        ...this.state, [which]: newValue
      })
    },

    setTokenNameSymModalOpenClose: (
      which: boolean
    ) => {
      this.setState({
        ...this.state, ModalOpen: which
      })
    },

    openTknNameSymModal: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.preventDefault()
      this.setState({
        ...this.state, ModalOpen: true
      })
    },

    handleTknNameSymOnChange: (which: 'TokenName' | 'TokenSymbol') => (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      this.setState({
        ...this.state, [which]: event.target.value
      })
    }
  })
}