import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

const Alert = (props: AlertProps) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
)

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  }
}))

interface INotificationSnackBars {
  successSnackOpen: boolean
  errorSnackOpen: boolean
  infoSnackOpen: boolean
  enterPvtkSnackOpen: boolean
  enteredPrivateKeySnackOpen: boolean
  forgotTknNameSymSnackOpen: boolean
  tokenType: 'ERC20' | 'BEP20'
  handleClose: (
    which:
      | 'successSnackOpen'
      | 'errorSnackOpen'
      | 'infoSnackOpen'
      | 'enterPvtkSnackOpen'
      | 'enteredPrivateKeySnackOpen'
      | 'forgotTknNameSymSnackOpen'
  ) => () => void
}

export const NotificationSnackBars = ({
  successSnackOpen, errorSnackOpen, enterPvtkSnackOpen, forgotTknNameSymSnackOpen,
  tokenType, handleClose, infoSnackOpen, enteredPrivateKeySnackOpen
}: INotificationSnackBars) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Snackbar anchorOrigin={
        { vertical: 'top', horizontal: 'center' }
      } open={successSnackOpen} autoHideDuration={6000} onClose={handleClose('successSnackOpen')}>
        <Alert onClose={handleClose('successSnackOpen')} severity="success">
          Successfully deployed your {tokenType} token! 🎉💃💃
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={
        { vertical: 'top', horizontal: 'center' }
      } open={errorSnackOpen} autoHideDuration={6000} onClose={handleClose('errorSnackOpen')}>
        <Alert onClose={handleClose('errorSnackOpen')} severity="error">
          There has been an error deploying your token...
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={
        { vertical: 'top', horizontal: 'center' }
      } open={infoSnackOpen} autoHideDuration={6000} onClose={handleClose('infoSnackOpen')}>
        <Alert onClose={handleClose('infoSnackOpen')} severity="info">
          You will be redirected shortly...
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={
        { vertical: 'top', horizontal: 'center' }
      } open={enterPvtkSnackOpen} autoHideDuration={9000} onClose={handleClose('enterPvtkSnackOpen')}>
        <Alert onClose={handleClose('enterPvtkSnackOpen')} severity="info">
          Please enter your private key. (We recommend not using this service for mainnet deployments for this exact reason. If you wish to deploy a {tokenType} token, please kindly contact the developer)
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={
        { vertical: 'top', horizontal: 'center' }
      } open={enteredPrivateKeySnackOpen} autoHideDuration={9000} onClose={handleClose('enteredPrivateKeySnackOpen')}>
        <Alert onClose={handleClose('enteredPrivateKeySnackOpen')} severity="warning">
          You have successfully entered your private key. We hope this is a test net key and not a real private key. For your safety we recommend not using this service for mainnet deployments.
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={
        { vertical: 'top', horizontal: 'center' }
      } open={forgotTknNameSymSnackOpen} autoHideDuration={9000} onClose={handleClose('forgotTknNameSymSnackOpen')}>
        <Alert onClose={handleClose('forgotTknNameSymSnackOpen')} severity="error">
          Uh oh. You forgot to enter the name and symbol for your {tokenType} token.
        </Alert>
      </Snackbar>
    </div>
  )
}