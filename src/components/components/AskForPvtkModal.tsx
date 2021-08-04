import { Backdrop, createStyles, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import Modal from '@material-ui/core/Modal'
import { Styles } from './__styles__'

const modalStyles = makeStyles(() => createStyles({
  'pvtk-modal': {
    ...(Styles['modal'] as any),
    padding: '2rem 2rem',
    height: '65%'
  },

  'pvtk-explain': {
    color: 'black',
    fontSize: '11pt',
    margin: '2rem 2rem'
  },

  'pvtk-input': {
    padding: '2rem 2rem'
  },

  'confirm-button': {
    ...Styles['modal-btn'] as any,
    marginTop: '2rem'
  }
}))

interface IAskForPvtkModal {
  pvtkModalOpen: boolean,
  setOpenClose: (which: boolean) => void
  pvtkOnChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
  PrivateKey: string
}

export const AskForPvtkModal = ({
  pvtkModalOpen, setOpenClose,
  pvtkOnChange, PrivateKey
}: IAskForPvtkModal) => {
  const styles = modalStyles()

  const AskForPvtkModal = () => (
    <div style={{
      top: '15%',
      left: '32.5%',
    }} className={styles['pvtk-modal']}>
      <h2 id="pvtk-step-title" className="tkn-ns-title">Private Key</h2>
      <p className={styles['pvtk-explain']}>
        Unfortunately we have to ask for your private key as most of the complexity pertaining the contract deployment is handled serverside.
      </p>
      <form noValidate autoComplete="off">
        <FormControl fullWidth className={styles['pvtk-input']} variant="outlined">
          <OutlinedInput
            id="pvtk-input"
            value={PrivateKey}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={50}
            onChange={pvtkOnChange}
          />
        </FormControl>
      </form>
      <button
        className={styles['confirm-button'] + ' secondary-btn-tkn'}
      >
        Confirm
      </button>
    </div>
  )

  return (
    <Modal
      open={pvtkModalOpen}
      onClose={() => {
        setOpenClose(false)
      }}
      aria-labelledby="pvtk-step-title"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={ {
        timeout: 800,
        style: { backdropFilter: 'blur(2rem)' }
      } }
    >
      <Fade in={pvtkModalOpen}>
        <AskForPvtkModal />
      </Fade>
    </Modal>
  )
}