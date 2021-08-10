import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { SwitchButton } from './utils/Switch'

export interface IMintableBurnableSwitches {
  mintableChecked: boolean
  handleSwitchChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    which: 'mintableChecked' | 'burnableChecked'
  ) => void
  burnableChecked: boolean  
}

export const MintableBurnableSwitches = ({
  mintableChecked,
  burnableChecked,
  handleSwitchChange
}: IMintableBurnableSwitches) => (
  <div className="mintable-burnable-switches push-down">
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item className="switch-label">Mintable</Grid>
        <Grid item>
          <SwitchButton
            checked={mintableChecked}
            onChange={(event) => {
              handleSwitchChange(event, 'mintableChecked')
            }}
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
            onChange={(event) => {
              handleSwitchChange(event, 'burnableChecked')
            }}
            name="burnable-check"
          />
        </Grid>
        <Grid item className="switch-label">Burnable</Grid>
      </Grid>
    </Typography>
  </div>
)
