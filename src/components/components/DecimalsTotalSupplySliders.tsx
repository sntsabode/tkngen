import { SliderComp } from './utils/Slider'

export const DecimalsTotalSupplySliders = ({
  handleSliderChange
}: {
  handleSliderChange: (
    event: React.ChangeEvent<{}>,
    which: 'Decimals' | 'TotalSupply',
    newValue: number | number[]
  ) => void 
}) => (
  <div className="slider-comps">
    <div className="deploy-token-comp">
      <SliderComp
        label="Decimals"
        defaultValue={18}
        max={18}
        restricted={true}
        marks={[
          { value: 6 },
          { value: 8 },
          { value: 12 },
          { value: 18 }
        ]}
        onChange={(event, newValue) => {
          handleSliderChange(event, 'Decimals', newValue)
        }}
      />
    </div>
    <div className="deploy-token-comp class2">
      <SliderComp
        label="Total Supply"
        defaultValue={100000}
        max={100000}
        restricted={true}
        marks={[
          { value: 10000 },
          { value: 50000 },
          { value: 100000 },
        ]}
        onChange={(event, newValue) => {
          handleSliderChange(event, 'TotalSupply', newValue)
        }}
      />
    </div>
  </div>
)
