import { MainDivHeading } from './components/MainDivHeading'
import { IMintableBurnableSwitches } from './components/MintableBurnableSwitches'
import { MintableBurnableSwitches } from './components/MintableBurnableSwitches'
import { DecimalsTotalSupplySliders } from './components/DecimalsTotalSupplySliders'

type IMainDiv = IMintableBurnableSwitches & {
  handleSliderChange: (
    event: React.ChangeEvent<{}>,
    which: 'Decimals' | 'TotalSupply',
    newValue: number | number[]
  ) => void
  ERCComp: boolean
  BEPComp: boolean
  openTknNameSymModal: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

export const MainDiv = ({
  mintableChecked,
  burnableChecked,
  handleSwitchChange,
  handleSliderChange,
  ERCComp,
  BEPComp,
  openTknNameSymModal
}: IMainDiv) => (
  <div className="main-content">
    <MainDivHeading
      ERCComp={ERCComp}
      BEPComp={BEPComp}
    />
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
        <button
          className="deploy-token-btn secondary-btn-tkn"
          onClick={openTknNameSymModal}
        >NEXT</button>
      </div>
    </div>
  </div>
)