import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

export const InputDiv = withStyles({
  root: {
    '& label': {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      color: 'black',
      '-webkit-opacity': 0.7,
      opacity: 0.7
    },

    '& label.Mui-focused': {
      color: 'black',
      '-webkit-opacity': 0.7,
      opacity: 0.7
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#3880ff',
    } 
  }
})(TextField)