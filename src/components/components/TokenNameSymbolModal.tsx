import Modal from '@material-ui/core/Modal'
import { createStyles, makeStyles } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Styles } from './__styles__'
import React from 'react'

const modalStyle = {
  top: '20%',
  left: '32.5%',
}

const modalStyles = makeStyles(() => createStyles({
  'token-name-sym-modal': Styles['modal'] as any,

  'tkn-name-sym-inputs': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0rem 2rem',
  },

  'tkn-input': {
    margin: '2rem 2rem',
    '& :hover': {
      borderColor: '#bfbfbf'
    }
  },

  'tkn-input-box': {
    '& :active': {
      borderColor: '#bfbfbf'
    },

    '& :hover': {
      borderColor: '#bfbfbf'
    }
  },

  'deploy-tkn-f-btn': Styles['modal-btn'] as any
}))

export interface ITokenNameSymbolModal {
  setOpenClose: (which: boolean) => void
  handleOnchange: (which: 'TokenName' | 'TokenSymbol') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  modalOpen: boolean
  TokenName: string
  TokenSymbol: string
  onClick: (event: React.MouseEvent) => void
}

export const TokenNameSymbolModal = ({
  setOpenClose, modalOpen, handleOnchange,
  TokenName, TokenSymbol, onClick
}: ITokenNameSymbolModal) => {
  const styles = modalStyles()

  const TokenNameSymbolModal = () => (
    <div style={modalStyle} className={styles['token-name-sym-modal']}>
      <h2 id="metadata-step-title" className="tkn-ns-title">Meta Data</h2>
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
      <button
        className={styles['deploy-tkn-f-btn'] + ' secondary-btn-tkn'}
        onClick={onClick}
      >NEXT</button>
    </div>
  )

  return (
    <Modal
      open={modalOpen}
      onClose={() => {
        setOpenClose(false)
      }}
      aria-labelledby="metadata-step-title"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={ {
        timeout: 800,
        style: { backdropFilter: 'blur(2rem)' }
      } }
    >
      <Fade in={modalOpen}>
        <TokenNameSymbolModal />
      </Fade>
    </Modal>
  )
}