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
  tokenType: 'ERC20' | 'BEP20'
  handleClose: (which: 'successSnackOpen' | 'errorSnackOpen' | 'infoSnackOpen') => () => void
}

export const NotificationSnackBars = ({
  successSnackOpen, errorSnackOpen,
  tokenType, handleClose, infoSnackOpen
}: INotificationSnackBars) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Snackbar key={'topcenter'} anchorOrigin={
        { vertical: 'top', horizontal: 'center' }
      } open={successSnackOpen} autoHideDuration={6000} onClose={handleClose('successSnackOpen')}>
        <Alert onClose={handleClose('successSnackOpen')} severity="success">
          Successfuly deployed your {tokenType} token! 🎉💃💃
        </Alert>
      </Snackbar>
      <Snackbar key={'topcenter'} anchorOrigin={
        { vertical: 'top', horizontal: 'center' }
      } open={errorSnackOpen} autoHideDuration={6000} onClose={handleClose('errorSnackOpen')}>
        <Alert onClose={handleClose('errorSnackOpen')} severity="error">
          There has been an error deploying your token...
        </Alert>
      </Snackbar>
      <Snackbar key={'topcenter'} anchorOrigin={
        { vertical: 'top', horizontal: 'center' }
      } open={infoSnackOpen} autoHideDuration={6000} onClose={handleClose('errorSnackOpen')}>
        <Alert onClose={handleClose('infoSnackOpen')} severity="info">
          You will be redirected shortly...
        </Alert>
      </Snackbar>
    </div>
  )
}