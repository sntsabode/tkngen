import { AiFillGithub } from 'react-icons/ai'

export const NotAvailableOnMobile = () => (
  <div className="not-on-mobile-container">
    <div className="glass">
      <h1>Unfortunately tkngen is not available on mobile.</h1>
      <a style={{ textDecoration: 'none' }} href="https://github.com/sntsabode/tkngen" className="github-credits sceondary-btn-tkn">
        <h3>Check it out on Github</h3>
        <AiFillGithub className="github-logo" style={ {
          width: '4rem',
          height: '4rem'
        } }/>
      </a>
    </div>
  </div>
)
