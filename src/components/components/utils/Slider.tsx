import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'

const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0'
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    /*background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3) )',
    display: 'flex',
    width: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2rem',*/
    left: 'calc(-50% + 12px)',
    top: -22,
    '& *': {
      color: '#000',
      background: 'transparent'
    }
  },
  track: {
    height: 2
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf'
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor'
  }
})(Slider)

export const SliderComp = ({
  label, marks, defaultValue,
  max, restricted, onChange
}: {
  label: string
  defaultValue: number
  max: number,
  restricted: boolean
  marks: { value: number, label?: string }[]
  onChange: (
    event: React.ChangeEvent<{}>,
    newValue: number | number[]
  ) => void
}) => (
  <>
    <p className="switch-label">{label}</p>
    <IOSSlider
      aria-label="slider"
      defaultValue={defaultValue}
      marks={marks}
      valueLabelDisplay="on"
      step={(restricted) ? null : defaultValue / 10 }
      max={max}
      onChange={onChange}
    />
  </>
)
