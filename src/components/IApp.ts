export type SupportedNetwork =
  | 'MAINNET'
  | 'MAINNET_FORK'
  | 'KOVAN'
  | 'BINANCESMARTCHAIN'
  | 'BINANCESMARTCHAIN_FORK'
  | 'BINANCESMARTCHAIN_TEST'

export interface IRequestBody {
  tokenName: string
  tokenDecimals: number
  tokenSymbol: string
  totalSupply: number
  privateKey: string
  network: SupportedNetwork
}

interface IActiveComponent {
  ERCComp: boolean
  BEPComp: boolean
}

interface IModalsOpen {
  tokenNameSymModalOpen: boolean
  networkModalOpen: boolean
  pvtkModalOpen: boolean
  loadingModalOpen: boolean
}

interface IMintableBurnableChecked {
  mintableChecked: boolean
  burnableChecked: boolean
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
  netThreeChecked: boolean
}

interface ISnacksOpen {
  successSnackOpen: boolean
  errorSnackOpen: boolean
  infoSnackOpen: boolean
  enterPvtkSnackOpen: boolean
  enteredPrivateKeySnackOpen: boolean
  forgotTknNameSymSnackOpen: boolean
}

export type IAppState = IActiveComponent
  & IModalsOpen
  & IMintableBurnableChecked
  & IRequestData
  & INetworkSwitchChecked
  & ISnacksOpen
  & {
    URL: string,
    Web3Status: string,
    tokenType: 'ERC20' | 'BEP20'
    sidebarOpen: boolean
    pvtk: string
  }
