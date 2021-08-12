import { Backdrop, Fade, Grid } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import { SwitchButton } from './utils/Switch'
import Typography from '@material-ui/core/Typography'

interface INetworkModal {
  networkModalOpen: boolean
  networks: {
    netOne: {
      net: 'MAINNET' | 'BSC'
      checked: boolean
    }
    netTwo: {
      net: 'KOVAN' | 'BSC Test Net'
      checked: boolean
    }
    netThree: {
      net: 'ETH FORK' | 'BSC FORK'
      checked: boolean
    }
  }
  setOpenClose: (which: boolean) => void
  onChange: (
    event: React.ChangeEvent,
    newNet: string,
    net: 'netOneChecked' | 'netTwoChecked' | 'netThreeChecked'
  ) => void
  deployToken: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>
}

export function NetworkModal({
  networkModalOpen, setOpenClose,
  networks, onChange, deployToken
}: INetworkModal) {
  const networkModal = (
    <div style={ {
      top: '12.5%',
      left: '32.5%',
    } } className="modal tenup">
      <h2 id="network-step-title" className="tkn-ns-title">Network</h2>
      <p className="modal-explain">Select the network you want your token deployed on.</p>
      <div className="network-switches-container">
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item className="switch-label">{networks.netOne.net}</Grid>
            <Grid item>
              <SwitchButton
                checked={networks.netOne.checked}
                onChange={(event) => {
                  onChange(event, networks.netOne.net, 'netOneChecked')
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
                checked={networks.netTwo.checked}
                onChange={(event) => {
                  onChange(event, networks.netTwo.net, 'netTwoChecked')
                }}
                name="mintable-check"
              />
            </Grid>
            <Grid item className="switch-label">{networks.netTwo.net}</Grid>
          </Grid>
        </Typography>
      </div>
      <div className="network-exper-switch">
        <Typography component="div">
          <Grid component="label" style={{
            display: 'flex',
            flexDirection: 'column'
          }} container alignItems="center" spacing={1}>
            <Grid item className="switch-label">{networks.netThree.net}</Grid>
            <Grid item>
              <SwitchButton
                checked={networks.netThree.checked}
                onChange={(event) => {
                  onChange(event, networks.netThree.net, 'netThreeChecked')
                }}
                name="mintable-check"
              />
            </Grid>
          </Grid>
        </Typography>
      </div>
      <button
        className="modal-btn confirm-button secondary-btn-tkn"
        onClick={deployToken}
      >Deploy!</button>
    </div>
  )

  return (
    <Modal
      open={networkModalOpen}
      onClose={() => {
        setOpenClose(false)
      }}
      aria-labelledby="network-step-title"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={ {
        timeout: 800,
        style: { backdropFilter: 'blur(2rem)' }
      } }
    >
      <Fade in={networkModalOpen}>
        {networkModal}
      </Fade>
    </Modal>
  )
}
