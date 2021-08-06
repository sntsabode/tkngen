export type SupportedNetwork =
  | 'MAINNET'
  | 'KOVAN'
  | 'BINANCESMARTCHAIN'
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
  TokenNameSymModalOpen: boolean
  NetworkModalOpen: boolean
  PvtkModalOpen: boolean
  LoadingModalOpen: boolean
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

interface ISnacksOpen {
  successSnackOpen: boolean
  errorSnackOpen: boolean
  infoSnackOpen: boolean
  enterPvtkSnackOpen: boolean
  enteredPrivateKeySnackOpen: boolean
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
