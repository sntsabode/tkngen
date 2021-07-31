import React from 'react'
import { Sidebar } from './Sidebar'
import { GrStatusGoodSmall } from 'react-icons/gr'
import { SwitchButton } from './components/Switch'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { SliderComp } from './components/Slider'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const Circles = () => (
  <>
    <div className="circle-1"></div>
    <div className="circle-2"></div>
  </>
)

const MainDivHeading = () => (
  <h3 className="heading">
    <div className="status">
      <div>
        <h1>Deploy ERC20</h1>
        <p>Fill in the form to deploy your ERC20 token!</p>
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

interface IMintableBurnableSwitches {
  mintableChecked: boolean
  handleMintableChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  burnableChecked: boolean
  handleBurnableChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  
}

const MintableBurnableSwitches = ({
  mintableChecked,
  handleMintableChange,
  burnableChecked,
  handleBurnableChange
}: IMintableBurnableSwitches) => (
  <div className="mintable-burnable-switches">
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item className="switch-label">Mintable</Grid>
        <Grid item>
          <SwitchButton
            checked={mintableChecked}
            onChange={handleMintableChange}
            name="mintable-check"
          />
        </Grid>
      </Grid>
    </Typography>
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <SwitchButton
            checked={burnableChecked}
            onChange={handleBurnableChange}
            name="burnable-check"
          />
        </Grid>
        <Grid item className="switch-label">Burnable</Grid>
      </Grid>
    </Typography>
  </div>
)

type IDeployTokenCard = IMintableBurnableSwitches

const DecimalsTotalSupplySliders = () => (
  <div className="slider-comps">
    <div className="deploy-token-comp">
      <SliderComp
        label="Decimals"
        defaultValue={18}
        max={18}
        restricted={true}
        marks={[
          { value: 6 },
          { value: 8 },
          { value: 12 },
          { value: 18 }
        ]}
      />
    </div>
    <div className="deploy-token-comp">
      <SliderComp
        label="Total Supply"
        defaultValue={100000}
        max={100000}
        restricted={true}
        marks={[
          { value: 10000 },
          { value: 50000 },
          { value: 100000 },
        ]}
      />
    </div>
  </div>
)

const InputDiv = withStyles({
  root: {
    '& label': {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      color: 'black',
      '-webkit-opacity': 0.7,
      opacity: 0.7
    },

    '& label.Mui-focused': {
      color: 'black',
      '-webkit-opacity': 0.7,
      opacity: 0.7
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#3880ff',
    } 
  }
})(TextField)

const DeployTokenCard = ({
  mintableChecked,
  handleMintableChange,
  burnableChecked,
  handleBurnableChange
}: IDeployTokenCard) => (
  <div className="deploy-token-card">
    <MintableBurnableSwitches
      mintableChecked={mintableChecked}
      handleMintableChange={handleMintableChange}
      burnableChecked={burnableChecked}
      handleBurnableChange={handleBurnableChange}
    />
    <div className="deploy-token-comp2">
      <InputDiv label="Token Name"/>
      <InputDiv label="Token Symbol"/>
    </div>
    <DecimalsTotalSupplySliders />
    <div className="deploy-token-btn-div">
      <button className="deploy-token-btn">Deploy Token!</button>
    </div>
  </div>
)

const MainDiv = ({
  mintableChecked,
  handleMintableChange,
  burnableChecked,
  handleBurnableChange
}: IDeployTokenCard) => (
  <div className="main-content">
    <MainDivHeading />
    <DeployTokenCard 
      handleMintableChange={handleMintableChange}
      mintableChecked={mintableChecked}
      handleBurnableChange={handleBurnableChange}
      burnableChecked={burnableChecked}
    />
  </div>
)

const TopNav = () => (
  <div className="top-nav">
    
  </div>
)

interface IAppState {
  ERCComp: boolean
  BEPComp: boolean
  MintableChecked: boolean
  BurnableChecked: boolean
}

export class App extends React.Component<{}, IAppState> {
  state = {
    ERCComp: true,
    BEPComp: false,
    MintableChecked: false,
    BurnableChecked: true
  }

  mintableOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = !this.state.MintableChecked ? true : false
    this.setState({
      MintableChecked: next,
      BurnableChecked: this.state.BurnableChecked
    })
  }

  burnableOnChange = () => {
    const next = !this.state.BurnableChecked ? true : false
    this.setState({ BurnableChecked: next })
  }

  switchComp = (
    which: 'ERCComp' | 'BEPComp'
  ) => {
    this.setState({ ...this.state, [which]: this.state[which] === false ? true : false })
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
            <MainDiv
              mintableChecked={this.state.MintableChecked}
              handleMintableChange={this.mintableOnChange}
              burnableChecked={this.state.BurnableChecked}
              handleBurnableChange={this.burnableOnChange}
            />
          </div>
        </section>
        <Circles />
      </main>
    )
  }
}