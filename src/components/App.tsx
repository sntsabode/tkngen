import React from 'react'
import { Sidebar } from './Sidebar'
import { Circles } from './components/utils/Circles'
import { TokenNameSymbolModal } from './components/TokenNameSymbolModal'
import { NetworkModal } from './components/NetworkModal'
import { AskForPvtkModal } from './components/AskForPvtkModal'
import { MainDiv } from './Main'
import axios from 'axios'
import Web3 from 'web3'

const TopNav = () => (
  <div className="top-nav">
    
  </div>
)

type SupportedNetwork =
  | 'MAINNET'
  | 'KOVAN'
  | 'BINANCESMARTCHAIN'
  | 'BINANCESMARTCHAIN_TEST'

interface IRequestBody {
  tokenName: string
  tokenDecimals: number
  tokenSymbol: string
  totalSupply: number
  privateKey: string
  network: SupportedNetwork
}

async function sendRequest(url: string, body: IRequestBody) {
  return axios.post(url, body)
}

interface IActiveComponent {
  ERCComp: boolean
  BEPComp: boolean
}

interface IModalsOpen {
  TokenNameSymModalOpen: boolean
  NetworkModalOpen: boolean
  PvtkModalOpen: boolean
}

interface IMintableBurnableChecked {
  MintableChecked: boolean
  BurnableChecked: boolean
}

interface IRequestData {
  TokenName: string
  TokenSymbol: string
  Decimals: number
  TotalSupply: number
  PrivateKey: string
  Network: SupportedNetwork
}

interface INetworkSwitchChecked {
  netOneChecked: boolean
  netTwoChecked: boolean
}

type IAppState = IActiveComponent
  & IModalsOpen
  & IMintableBurnableChecked
  & IRequestData
  & INetworkSwitchChecked
  & { URL: string, Web3Status: string }

const URLs = {
  ERC20: {
    Standard: 'http://localhost:9000/ERC-20/Standard'
  },

  BEP20: {
    Standard: 'http://localhost:9000/BEP-20/Standard'
  }
}

export class App extends React.Component<{}, IAppState> {
  Web3?: Web3
  
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
    TokenNameSymModalOpen: false,
    NetworkModalOpen: false,
    PvtkModalOpen: false,
    PrivateKey: '',
    Network: 'KOVAN' as SupportedNetwork,
    netOneChecked: false,
    netTwoChecked: false,
    Web3Status: '#ff4444' // red
  }

  deployToken = async () => {
    try {
      const res = await sendRequest(this.state.URL, {
        tokenName: this.state.TokenName,
        tokenDecimals: this.state.Decimals,
        tokenSymbol: this.state.TokenSymbol,
        totalSupply: this.state.TotalSupply,
        privateKey: this.state.PrivateKey,
        network: this.state.Network
      })

      console.log(res)
    } catch (e) {

    }
  }

  connectWeb3 = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    
    if (!(window as any).ethereum) return alert('Uh oh')

    await (window as any).ethereum.send('eth_requestAccounts')
    this.Web3 = new Web3((window as any).ethereum)
    this.setState({
      ...this.state, Web3Status: '#00C851' // green
    })
    this.handlers.handlePvtkModalOpenClose(true)
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
              openTknNameSymModal={(event) => {
                event.preventDefault()
                this.handlers.handleTokenNameSymModalOpenClose(true)
              }}
              Web3Status={this.state.Web3Status}
              connectWeb3={this.connectWeb3}
            />
            <TokenNameSymbolModal
              modalOpen={this.state.TokenNameSymModalOpen}
              setOpenClose={this.handlers.handleTokenNameSymModalOpenClose}
              handleOnchange={this.handlers.handleTknNameSymOnChange}
              TokenName={this.state.TokenName}
              TokenSymbol={this.state.TokenSymbol}
              onClick={(event) => {
                event.preventDefault()
                this.handlers.handleTokenNameSymModalOpenClose(false)
                setTimeout(
                  () => this.handlers.handleNetworkModalOpenClose(true),
                  200
                )
              }}
            />
            <NetworkModal
              networkModalOpen={this.state.NetworkModalOpen}
              setOpenClose={this.handlers.handleNetworkModalOpenClose}
              networks={ {
                netOne: {
                  net: this.state.ERCComp ? 'MAINNET' : 'BSC' as any,
                  checked: this.state.netOneChecked
                },

                netTwo: {
                  net: this.state.ERCComp ? 'KOVAN' : 'BSC Test Net' as any,
                  checked: this.state.netTwoChecked
                }
              } }
              onChange={this.handlers.handleNetworkChange}
            />
            <AskForPvtkModal
              pvtkModalOpen={this.state.PvtkModalOpen}
              setOpenClose={this.handlers.handlePvtkModalOpenClose}
              pvtkOnChange={(event) => {
                this.setState({
                  ...this.state, PrivateKey: event.target.value
                })
              }}
              PrivateKey={this.state.PrivateKey}
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
          URL: URLs.ERC20.Standard,
          Network: 'KOVAN'
        })
      } else {
        const bool = !this.state.BEPComp ? true : false
        this.setState({
          ...this.state,
          BEPComp: bool,
          ERCComp: !bool,
          URL: URLs.BEP20.Standard,
          Network: 'BINANCESMARTCHAIN_TEST'
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

    handleTokenNameSymModalOpenClose: (
      which: boolean
    ) => {
      this.setState({
        ...this.state, TokenNameSymModalOpen: which
      })
    },

    handleTknNameSymOnChange: (which: 'TokenName' | 'TokenSymbol') => (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      this.setState({
        ...this.state, [which]: event.target.value
      })
    },

    handleNetworkModalOpenClose: (which: boolean) => {
      this.setState({
        ...this.state, NetworkModalOpen: which
      })
    },

    handleNetworkChange: (
      event: React.ChangeEvent, newNet: string,
      net: 'netOneChecked' | 'netTwoChecked'
    ) => {
      const bool = this.state[net] ? false : true
      if (net === 'netOneChecked') {
        this.setState({
          ...this.state, Network: newNet as SupportedNetwork,
          netOneChecked: bool,
          netTwoChecked: !bool
        })
      }

      else {
        this.setState({
          ...this.state, Network: newNet as SupportedNetwork,
          netTwoChecked: bool,
          netOneChecked: !bool
        })
      }
    },

    handlePvtkModalOpenClose: (which: boolean) => {
      this.setState({
        ...this.state, PvtkModalOpen: which
      })
    }
  })
}