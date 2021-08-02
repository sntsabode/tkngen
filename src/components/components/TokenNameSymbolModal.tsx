
import Modal from '@material-ui/core/Modal'
import { createStyles, makeStyles } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'

const modalStyle = {
  top: '20%',
  left: '32.5%',
}

const modalStyles = makeStyles(() => createStyles({
  'token-name-sym-modal': {
    position: 'absolute',
    width: '35%',
    height: '60%',
    border: 'none',
    background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))',
    borderRadius: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  'tkn-name-sym-inputs': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0rem 2rem',
  },

  'tkn-input': {
    margin: '2rem 2rem',
    '&:hover': {
      borderColor: '#bfbfbf'
    }
  },

  'tkn-input-box': {
    '&:active': {
      borderColor: '#bfbfbf'
    },

    '&:hover': {
      borderColor: '#bfbfbf'
    }
  },

  'deploy-tkn-f-btn': {
    width: '40%',
    height: '4rem',
    color: 'gray !important',
    border: 'none',
    borderRadius: '2rem',
    fontSize: '14pt',
    fontWeight: 700
  }
}))

export interface ITokenNameSymbolModal {
  setOpenClose: (which: boolean) => void
  handleOnchange: (which: 'TokenName' | 'TokenSymbol') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  modalOpen: boolean
  TokenName: string
  TokenSymbol: string
}

export const TokenNameSymbolModal = ({
  setOpenClose, modalOpen, handleOnchange,
  TokenName, TokenSymbol
}: ITokenNameSymbolModal) => {
  const styles = modalStyles()

  const TokenNameSymbolModal = () => (
    <div style={modalStyle} className={styles['token-name-sym-modal']}>
      <h2 id="last-step-title" className="tkn-ns-title">Last Step</h2>
      <form className={styles['tkn-name-sym-inputs']} noValidate autoComplete="off">
        <FormControl fullWidth className={styles['tkn-input']} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Token Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={TokenName}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={100}
            className={styles['tkn-input-box']}
            onChange={handleOnchange('TokenName')}
          />
        </FormControl>
        <FormControl fullWidth className={styles['tkn-input']} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Token Symbol</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={TokenSymbol}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={110}
            className={styles['tkn-input-box']}
            onChange={handleOnchange('TokenSymbol')}
          />
        </FormControl>
      </form>
      <div style={ { marginTop: '2rem' } }></div>
      <button className={styles['deploy-tkn-f-btn'] + ' secondary-btn-tkn'}>DEPLOY!</button>
    </div>
  )

  return (
    <Modal
      open={modalOpen}
      onClose={() => {
        setOpenClose(false)
      }}
      aria-labelledby="last-step-title"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 800,
        style: { backdropFilter: 'blur(2rem)' }
      }}
    >
      <Fade in={modalOpen}>
        <TokenNameSymbolModal />
      </Fade>
    </Modal>
  )
}