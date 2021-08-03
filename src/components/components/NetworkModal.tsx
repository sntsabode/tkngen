import { Backdrop, createStyles, Fade, Grid } from '@material-ui/core'
import { Styles, modalStyle } from './__styles__'
import { makeStyles } from '@material-ui/styles'
import Modal from '@material-ui/core/Modal'
import { SwitchButton } from './utils/Switch'
import Typography from '@material-ui/core/Typography'

const modalStyles = makeStyles(() => createStyles({
  'network-modal': Styles['modal'] as any,
  'network-modal-deploy-btn': {
    ...Styles['modal-btn'] as any,
    marginTop: '1rem'
  }
}))

interface INetworkModal {
  networkModalOpen: boolean
  networks: {
    netOne: {
      net: 'MAINNET' | 'BINANCESMARTCHAIN'
      checked: boolean
    }
    netTwo: {
      net: 'KOVAN' | 'BINANCESMARTCHAIN_TEST'
      checked: boolean
    }
  }
  setOpenClose: (which: boolean) => void
  onChange: (
    event: React.ChangeEvent,
    newNet: string,
    net: 'netOneChecked' | 'netTwoChecked'
  ) => void
}

export const NetworkModal = ({
  networkModalOpen, setOpenClose,
  networks, onChange
}: INetworkModal) => {
  const styles = modalStyles()

  const NetworkModal = () => (
    <div style={modalStyle} className={styles['network-modal']}>
      <h2 id="network-step-title" className="tkn-ns-title">Network</h2>
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
      <button className={styles['network-modal-deploy-btn'] + ' secondary-btn-tkn'}>Deploy!</button>
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
        <NetworkModal />
      </Fade>
    </Modal>
  )
}
