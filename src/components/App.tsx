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
import { ToastContainer, toast } from 'react-toastify'

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
    mintableChecked: false,
    burnableChecked: true,
    TokenName: '',
    TokenSymbol: '',
    Decimals: 18,
    TotalSupply: 100000,
    tokenNameSymModalOpen: false,
    networkModalOpen: false,
    loadingModalOpen: false,
    pvtkModalOpen: false,
    PrivateKey: '',
    Network: 'KOVAN' as SupportedNetwork,
    netOneChecked: false,
    netTwoChecked: false,
    netThreeChecked: false,
    Web3Status: '#ff4444', // red
    tokenType: 'ERC20' as 'ERC20' | 'BEP20',
    successSnackOpen: false,
    errorSnackOpen: false,
    infoSnackOpen: false,
    enterPvtkSnackOpen: false,
    enteredPrivateKeySnackOpen: false,
    forgotTknNameSymSnackOpen: false,
    sidebarOpen: false,
    pvtk: ''
  }

  deployToken = async () => {
    if (!this.deployToken_.checkParams()) return

    let dontAutoOpenPvtkModal = false

    this.handlers.handlepvtkModalOpenClose = (which: boolean) => {
      dontAutoOpenPvtkModal = true
      this.setState({
        ...this.state, pvtkModalOpen: which
      })
    }
    try {
      if (!this.state.pvtk) {
        this.setState({
          ...this.state, networkModalOpen: false,
          enterPvtkSnackOpen: true
        })

        setTimeout(() => this.state.pvtkModalOpen
          ? {} : dontAutoOpenPvtkModal ? {} : this.setState({
            ...this.state, pvtkModalOpen: true
          }), 10000)
        
        return
      }

      const url = this.deployToken_.determineUrlPath()

      this.setState({
        ...this.state,
        networkModalOpen: false,
        loadingModalOpen: true
      })

      const res = await this.deployToken_.sendRequest(url)
      const redirectUrl = this.deployToken_.determineRedirectUrl(res.data.data.receipt.transactionHash)

      console.log(res)

      this.handlers.handlepvtkModalOpenClose = (which: boolean) => {
        this.setState({
          ...this.state, pvtkModalOpen: which
        })
      }

      this.deployToken_.redirectUser(redirectUrl)
    } catch (e) {
      console.log(e.response.data)
      this.setState({
        ...this.state, loadingModalOpen: false, errorSnackOpen: true
      })

      setTimeout(() => {
        e.response.data.err.errors.forEach((err: any) => {
          toast.error(err.msg, {
            position: 'top-left'
          })
        })

        this.setState({
          ...this.state, errorSnackOpen: false
        })
      }, 1000)
    }
  }

  readonly deployToken_ = {
    redirectUser: (redirectUrl: string) => {
      this.setState({
        ...this.state, loadingModalOpen: false
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
      if (this.state.mintableChecked && !this.state.burnableChecked)
        return this.state.URL + 'Mintable'
      else if (this.state.burnableChecked && !this.state.mintableChecked)
        return this.state.URL + 'Burnable'
      else if (this.state.mintableChecked && this.state.burnableChecked)
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
        else if ((this.state.Network as string) === 'ETH FORK')
          return 'MAINNET_FORK'
        else if ((this.state.Network as string) === 'BSC FORK')
          return 'BINANCESMARTCHAIN_FORK'
        else return this.state.Network
      })()
    }),

    checkParams: (): boolean => {
      if (!this.state.TokenName || !this.state.TokenSymbol) {
        this.setState({
          ...this.state, networkModalOpen: false, forgotTknNameSymSnackOpen: true
        })

        return false
      }

      return true
    }
  }

  readonly connectWeb3 = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    
    if (!(window as any).ethereum) return alert('Uh oh')

    await (window as any).ethereum.send('eth_requestAccounts')
    this.Web3 = new Web3((window as any).ethereum)
    this.setState({
      ...this.state, Web3Status: '#00C851' // green
    })
    this.handlers.handlepvtkModalOpenClose(true)
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
              }}
            />
            <MainDiv
              mintableChecked={this.state.mintableChecked}
              burnableChecked={this.state.burnableChecked}
              handleSwitchChange={this.handlers.handleSwitchChange}
              handleSliderChange={this.handlers.handleSliderChange}
              ERCComp={this.state.ERCComp}
              BEPComp={this.state.BEPComp}
              openTknNameSymModal={(event) => {
                event.preventDefault()
                console.log(this.deployToken_.determineUrlPath())
                this.handlers.handletokenNameSymModalOpenClose(true)
              }}
              Web3Status={this.state.Web3Status}
              connectWeb3={this.connectWeb3}
            />
            <TokenNameSymbolModal
              modalOpen={this.state.tokenNameSymModalOpen}
              setOpenClose={this.handlers.handletokenNameSymModalOpenClose}
              handleOnchange={this.handlers.handleTknNameSymOnChange}
              TokenName={this.state.TokenName}
              TokenSymbol={this.state.TokenSymbol}
              onClick={(event) => {
                event.preventDefault()
                this.handlers.handletokenNameSymModalOpenClose(false)
                setTimeout(
                  () => this.handlers.handlenetworkModalOpenClose(true),
                  200
                )
              }}
            />
            <NetworkModal
              networkModalOpen={this.state.networkModalOpen}
              setOpenClose={this.handlers.handlenetworkModalOpenClose}
              networks={ {
                netOne: {
                  net: this.state.ERCComp ? 'MAINNET' : 'BSC',
                  checked: this.state.netOneChecked
                },

                netTwo: {
                  net: this.state.ERCComp ? 'KOVAN' : 'BSC Test Net',
                  checked: this.state.netTwoChecked
                },

                netThree: {
                  net: this.state.ERCComp ? 'ETH FORK' : 'BSC FORK',
                  checked: this.state.netThreeChecked
                }
              } }
              onChange={this.handlers.handleNetworkChange}
              deployToken={async (event) => {
                event.preventDefault()
                return this.deployToken()
              } }
            />
            <AskForPvtkModal
              pvtkModalOpen={this.state.pvtkModalOpen}
              setOpenClose={this.handlers.handlepvtkModalOpenClose}
              pvtkOnChange={(event) => this.setState({
                ...this.state, PrivateKey: event.target.value
              })}
              PrivateKey={this.state.PrivateKey}
              confirmPvtk={this.handlers.confirmPvtk}
            />
            <LoadingModal
              loadingModalOpen={this.state.loadingModalOpen}
            />
            <NotificationSnackBars
              successSnackOpen={this.state.successSnackOpen}
              forgotTknNameSymSnackOpen={this.state.forgotTknNameSymSnackOpen}
              errorSnackOpen={this.state.errorSnackOpen}
              tokenType={this.state.tokenType}
              infoSnackOpen={this.state.infoSnackOpen}
              handleClose={(which: 'successSnackOpen' | 'errorSnackOpen' | 'infoSnackOpen' | 'enterPvtkSnackOpen' | 'enteredPrivateKeySnackOpen' | 'forgotTknNameSymSnackOpen') => 
              () => this.setState({
                ...this.state, [which]: false
              })}
              enterPvtkSnackOpen={this.state.enterPvtkSnackOpen}
              enteredPrivateKeySnackOpen={this.state.enteredPrivateKeySnackOpen}
            />
          </div>
        </section>
        <ToastContainer />
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
      which: 'mintableChecked' | 'burnableChecked'
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

    handletokenNameSymModalOpenClose: (
      which: boolean
    ) => {
      this.setState({
        ...this.state, tokenNameSymModalOpen: which
      })
    },

    handleTknNameSymOnChange: (which: 'TokenName' | 'TokenSymbol') => (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      this.setState({
        ...this.state, [which]: event.target.value
      })
    },

    handlenetworkModalOpenClose: (which: boolean) => {
      this.setState({
        ...this.state, networkModalOpen: which
      })
    },

    handleNetworkChange: (
      event: React.ChangeEvent, newNet: string,
      net: 'netOneChecked' | 'netTwoChecked' | 'netThreeChecked'
    ) => ({
      netOneChecked: () => (this.state.netOneChecked) ? this.setState({
        ...this.state, Network: newNet as SupportedNetwork,
        netOneChecked: false,
        netTwoChecked: false,
        netThreeChecked: false
      }) : this.setState({
        ...this.state, Network: newNet as SupportedNetwork,
        netOneChecked: true,
        netTwoChecked: false,
        netThreeChecked: false
      }),

      netTwoChecked: () => (this.state.netTwoChecked) ? this.setState({
        ...this.state, Network: newNet as SupportedNetwork,
        netOneChecked: false,
        netTwoChecked: false,
        netThreeChecked: false
      }) : this.setState({
        ...this.state, Network: newNet as SupportedNetwork,
        netOneChecked: false,
        netTwoChecked: true,
        netThreeChecked: false
      }),

      netThreeChecked: () => (this.state.netThreeChecked) ? this.setState({
        ...this.state, Network: newNet as SupportedNetwork,
        netOneChecked: false,
        netTwoChecked: false,
        netThreeChecked: false
      }) : this.setState({
        ...this.state, Network: newNet as SupportedNetwork,
        netOneChecked: false,
        netTwoChecked: false,
        netThreeChecked: true
      })
    })[net](),

    handlepvtkModalOpenClose: (which: boolean) => {
      this.setState({
        ...this.state, pvtkModalOpen: which
      })
    },

    confirmPvtk: (event: any) => {
      event.preventDefault()
      const pvt = '•••••••••••••••'

      if (this.state.PrivateKey !== '•••••••••••••••') {
        this.setState({
          ...this.state, pvtk: this.state.PrivateKey, PrivateKey: pvt
        })
      }

      setTimeout(() => {
        this.setState({
          ...this.state, pvtkModalOpen: false, enteredPrivateKeySnackOpen: true
        })
      }, 800)
    }
  })
}