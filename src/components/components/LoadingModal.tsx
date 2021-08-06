import Modal from '@material-ui/core/Modal'
import { Backdrop, Fade } from '@material-ui/core'
//import { createStyles, makeStyles } from '@material-ui/styles'
import { Loader } from './utils/Loader'

export interface ILoadingModal {
  loadingModalOpen: boolean
}

export const LoadingModal = ({
  loadingModalOpen
}: ILoadingModal) => <Modal
  open={loadingModalOpen}
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