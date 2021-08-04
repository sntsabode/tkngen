import Modal from '@material-ui/core/Modal'
import { Backdrop, Fade } from '@material-ui/core'
//import { createStyles, makeStyles } from '@material-ui/styles'
import { Loader } from './utils/Loader'

export interface ILoadingModal {
  loadingModalOpen: boolean
  onClose: () => void
}

export const LoadingModal = ({
  loadingModalOpen, onClose
}: ILoadingModal) => <Modal
  open={loadingModalOpen}
  onClose={onClose}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={ {
    timeout: 500,
    style: { backdropFilter: 'blur(2rem)'}
  } }
>
  <Fade in={loadingModalOpen}>
    <Loader />
  </Fade>
</Modal>