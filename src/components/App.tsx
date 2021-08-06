import React from 'react'
import { Sidebar } from './Sidebar'
import { Circles } from './components/utils/Circles'
import { TokenNameSymbolModal } from './components/TokenNameSymbolModal'
import { NetworkModal } from './components/NetworkModal'
import { AskForPvtkModal } from './components/AskForPvtkModal'
import { MainDiv } from './Main'
import axios from 'axios'
import Web3 from 'web3'
import { LoadingModal } from './components/LoadingModal'
import { NotificationSnackBars } from './components/NotificationSnackBars'
import { IAppState, IRequestBody, SupportedNetwork } from './IApp'
import { GrStatusGoodSmall } from 'react-icons/gr'
import { BiMenuAltLeft } from 'react-icons/bi'

const TopNav = ({
  connectWeb3, Web3Status, openCloseSidebar
}: {
  openCloseSidebar: (
    event: React.MouseEvent<SVGElement, MouseEvent>
  ) => void
  Web3Status: string
  connectWeb3: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>
}) => (
  <div className="top-nav">
    <BiMenuAltLeft onClick={openCloseSidebar} className="menu-icon"/>

    <button
      id="secondary-connect-web3-btn"
      className="connect-web3-btn secondary-btn-tkn"
      onClick={connectWeb3}
    >
      <p>Connect Web3</p>
      <GrStatusGoodSmall className="web3-status-icon" style={ {
        color: Web3Status
      } }/>
    </button>
  </div>
)

async function sendRequest(url: string, body: IRequestBody) {
  return axios.post(url, body)
}

const URLs = {
  ERC20: 'http://localhost:9000/ERC-20/',
  BEP20: 'http://localhost:9000/BEP-20/'
}

const BlockExplorerURLs = {
  bsc: {
    mainnet: '',
    testnet: 'https://testnet.bscscan.com/tx/'
  },

  eth: {
    mainnet: '',
    kovan: ''
  }
}

export class App extends React.Component<{}, IAppState> {
  Web3?: Web3
  state = {
    URL: URLs.ERC20,
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
    LoadingModalOpen: false,
    PvtkModalOpen: false,
    PrivateKey: '',
    Network: 'KOVAN' as SupportedNetwork,
    netOneChecked: false,
    netTwoChecked: false,
    Web3Status: '#ff4444', // red
    tokenType: 'ERC20' as 'ERC20' | 'BEP20',
    successSnackOpen: false,
    errorSnackOpen: false,
    infoSnackOpen: false,
    enterPvtkSnackOpen: false,
    enteredPrivateKeySnackOpen: false,
    sidebarOpen: false,
    pvtk: ''
  }

  deployToken = async () => {
    try {
      if (!this.state.pvtk) {
        this.setState({
          ...this.state, NetworkModalOpen: false,
          enterPvtkSnackOpen: true
        })

        setTimeout(() => this.setState({
          ...this.state, PvtkModalOpen: true
        }), 11000)
        return
      }

      const url = this.deployToken_.determineUrlPath()

      this.setState({
        ...this.state,
        NetworkModalOpen: false,
        LoadingModalOpen: true
      })

      const res = await this.deployToken_.sendRequest(url)
      const redirectUrl = this.deployToken_.determineRedirectUrl(res.data.data.receipt.transactionHash)

      console.log(res)

      this.deployToken_.redirectUser(redirectUrl)
    } catch (e) {
      console.error(e)
      this.setState({
        ...this.state, LoadingModalOpen: false, errorSnackOpen: true
      })
    }
  }

  readonly deployToken_ = {
    redirectUser: (redirectUrl: string) => {
      this.setState({
        ...this.state, LoadingModalOpen: false
      })
  
      setTimeout(() => this.setState({
        ...this.state, successSnackOpen: true
      }), 500)
      setTimeout(() => this.setState({
        ...this.state, infoSnackOpen: true, successSnackOpen: false
      }), 2000)
      setTimeout(() => window.location.href = redirectUrl, 5000)
    },

    determineUrlPath: () => {
      if (this.state.MintableChecked && !this.state.BurnableChecked)
        return this.state.URL + ''
      else if (this.state.BurnableChecked && !this.state.MintableChecked)
        return this.state.URL + ''
      else if (this.state.MintableChecked && this.state.BurnableChecked)
        return this.state.URL + 'MintableBurnable'
      else return this.state.URL + 'Standard'
    },

    determineRedirectUrl: (txhash: string) => (this.state.Network as string) === 'BSC Test Net'
    ? BlockExplorerURLs.bsc.testnet + txhash
    : (this.state.Network as string) === 'BSC'
    ? BlockExplorerURLs.bsc.mainnet + txhash
    : this.state.Network === 'KOVAN'
    ? BlockExplorerURLs.eth.kovan + txhash
    : this.state.Network === 'MAINNET'
    ? BlockExplorerURLs.eth.mainnet + txhash
    : '/',

    sendRequest: (url: string) => sendRequest(url, {
      tokenName: this.state.TokenName,
      tokenDecimals: this.state.Decimals,
      tokenSymbol: this.state.TokenSymbol,
      totalSupply: this.state.TotalSupply,
      privateKey: this.state.pvtk,
      network: ((): SupportedNetwork => {
        if ((this.state.Network as string) === 'BSC Test Net')
          return 'BINANCESMARTCHAIN_TEST'
        else if ((this.state.Network as string) === 'BSC')
          return 'BINANCESMARTCHAIN'
        else return this.state.Network
      })()
    })
  }

  readonly connectWeb3 = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    
    if (!(window as any).ethereum) return alert('Uh oh')

    await (window as any).ethereum.send('eth_requestAccounts')
    this.Web3 = new Web3((window as any).ethereum)
    this.setState({
      ...this.state, Web3Status: '#00C851' // green
    })
    this.handlers.handlePvtkModalOpenClose(true)
  }

  readonly render = () => {
    return (
      <main>
        <section className="glass">
          <Sidebar
            activeChange={this.handlers.activeChange}
            ERCComp={this.state.ERCComp}
            BEPComp={this.state.BEPComp}
          />
          <div className="container">
            <TopNav
              connectWeb3={this.connectWeb3}
              Web3Status={this.state.Web3Status}
              openCloseSidebar={(event) => {
                if (!this.state.sidebarOpen) {
                  document.getElementById('sidebar_')!.style.display = 'flex !important'
                  this.setState({
                    ...this.state, sidebarOpen: true
                  })
                  console.log('sidebar open')
                }

                document.getElementById('sidebar_')!.style.display = 'none !important'
                this.setState({
                  ...this.state, sidebarOpen: false
                })

                console.log('llll')
              }}
            />
            <MainDiv
              mintableChecked={this.state.MintableChecked}
              burnableChecked={this.state.BurnableChecked}
              handleSwitchChange={this.handlers.handleSwitchChange}
              handleSliderChange={this.handlers.handleSliderChange}
              ERCComp={this.state.ERCComp}
              BEPComp={this.state.BEPComp}
              openTknNameSymModal={(event) => {
                event.preventDefault()
                console.log(this.deployToken_.determineUrlPath())
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
              deployToken={async (event) => {
                event.preventDefault()
                return this.deployToken()
              } }
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
              confirmPvtk={this.handlers.confirmPvtk}
            />
            <LoadingModal
              loadingModalOpen={this.state.LoadingModalOpen}
            />
            <NotificationSnackBars
              successSnackOpen={this.state.successSnackOpen}
              errorSnackOpen={this.state.errorSnackOpen}
              tokenType={this.state.tokenType}
              infoSnackOpen={this.state.infoSnackOpen}
              handleClose={(which: 'successSnackOpen' | 'errorSnackOpen' | 'infoSnackOpen' | 'enterPvtkSnackOpen' | 'enteredPrivateKeySnackOpen') => () => {
                this.setState({
                  ...this.state, [which]: false
                })
              }}
              enterPvtkSnackOpen={this.state.enterPvtkSnackOpen}
              enteredPrivateKeySnackOpen={this.state.enteredPrivateKeySnackOpen}
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
          URL: URLs.ERC20,
          Network: 'KOVAN',
          tokenType: 'ERC20'
        })
      } else {
        const bool = !this.state.BEPComp ? true : false
        this.setState({
          ...this.state,
          BEPComp: bool,
          ERCComp: !bool,
          URL: URLs.BEP20,
          Network: 'BINANCESMARTCHAIN_TEST',
          tokenType: 'BEP20'
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
    },

    confirmPvtk: (event: any) => {
      event.preventDefault()
      const pvt = '•••••••••••••••'

      this.setState({
        ...this.state, pvtk: this.state.PrivateKey, PrivateKey: pvt
      })

      setTimeout(() => {
        this.setState({
          ...this.state, PvtkModalOpen: false, enteredPrivateKeySnackOpen: true
        })
      }, 2000)
    }
  })
}