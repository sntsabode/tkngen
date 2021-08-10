import { Backdrop, Fade } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import Modal from '@material-ui/core/Modal'
import { FiKey } from 'react-icons/fi'

interface IAskForPvtkModal {
  pvtkModalOpen: boolean,
  setOpenClose: (which: boolean) => void
  pvtkOnChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
  PrivateKey: string
  confirmPvtk: (
    event: any
  ) => void
}

export const AskForPvtkModal = ({
  pvtkModalOpen, setOpenClose,
  pvtkOnChange, PrivateKey, confirmPvtk
}: IAskForPvtkModal) => {
  const askForPvtkModal = (
    <div style={{
      top: '15%',
      left: '32.5%',
    }} className="modal fiveup pvtk-modal">
      <h2 id="pvtk-step-title" className="tkn-ns-title">Private Key</h2>
      <p className="modal-explain">
        Unfortunately we have to ask for your private key as most of the complexity pertaining the contract deployment is handled serverside.
      </p>
      <form noValidate autoComplete="off">
        <FormControl fullWidth className="pvtk-input" variant="outlined">
          <OutlinedInput
            id="pvtk-input"
            value={PrivateKey}
            startAdornment={<InputAdornment position="start"><FiKey /></InputAdornment>}
            labelWidth={50}
            onChange={pvtkOnChange}
          />
        </FormControl>
      </form>
      <button
        className="modal-btn confirm-button secondary-btn-tkn"
        onClick={confirmPvtk}
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
        {askForPvtkModal}
      </Fade>
    </Modal>
  )
}