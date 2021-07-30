import ETHLogo from '../imgs/eth-logo.png'
import ETHGenTokenLogo from '../imgs/eth.png'
import BSCGenTokenLogo from '../imgs/binance-logo.png'
import { AiFillGithub } from 'react-icons/ai'
const SidebarHeader = () => (
  <div className="sidebar-header">
    <img
      src={ETHLogo} alt=""
      style={ {
        width: '2rem',
        height: '2rem'
      } }
    />
  </div>
)

interface IGenTokenLink { 
  img: string
  h2Data: string
  activeChange: ActiveChangeFunc
  which: 'ERCComp' | 'BEPComp'
  active: 'active' | ''
}

const GenTokenLink = ({
  img, h2Data, activeChange, which, active
}: IGenTokenLink) => (
  <div className={'gen-token-link ' + active} onClick={event => {
    activeChange(event, which)
  }}>
    <img src={img} alt="" style={ {
      height: '2rem',
      width: '2rem'
    } }/>
    <h2>{h2Data}</h2>
  </div>
)

type ActiveChangeFunc = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  which: 'ERCComp' | 'BEPComp'
) => void

interface IGenTokenLinks {
  activeChange: ActiveChangeFunc
}

const GenTokenLinks = ({
  activeChange
}: IGenTokenLinks) => (
  <div className="gen-token-links">
    <GenTokenLink
      img={ETHGenTokenLogo}
      h2Data="ERC"
      activeChange={activeChange}
      which="ERCComp"
      active="active"
    />
    <GenTokenLink
      img={BSCGenTokenLogo}
      h2Data="BEP"
      activeChange={activeChange}
      which="BEPComp"
      active=""
    />
  </div>
)

const GithubBadge = () => (
  <div className="github-credits btn-gradient">
    <h3>Check it out on Github</h3>
    <AiFillGithub className="github-logo" style={ {
      width: '4rem',
      height: '4rem'
    } }/>
  </div>
)

export const Sidebar = ({
  activeChange
}: {
  activeChange: ActiveChangeFunc
}) => (
  <div className="sidebar">
    <SidebarHeader />
    <GenTokenLinks activeChange={activeChange}/>
    <GithubBadge />
  </div>
)