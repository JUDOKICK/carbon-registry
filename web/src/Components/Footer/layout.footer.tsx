import { Col, Divider, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import bitmoLogo from '../../Assets/Images/bitmo_logo.svg';
import './layout.footer.scss';
import { CcCircle } from 'react-bootstrap-icons';

const LayoutFooter = () => {
  const { i18n, t } = useTranslation(['common', 'homepage']);

  return (
    <div className="homepage-footer-container">
      <Row>
        <Col md={24} lg={24}>
          <div className="logocontainer">
            <div className="logo">
              <img src={bitmoLogo} alt="slider-logo" />
            </div>
            <div>
              <div style={{ display: 'flex' }}>
                <div className="title">{process.env.REACT_APP_PRIMARY_NAME || 'BITMO'}</div>
                <div className="title-sub">
                  {process.env.REACT_APP_SECONDARY_NAME || 'REGISTRY'}
                </div>
              </div>
              <div className="footer-country-name">
                {process.env.REACT_APP_COUNTRY_NAME || 'Canada'}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Divider className="divider" style={{ backgroundColor: '#FFFF' }} />
      <Row>
        <Col md={24} lg={24}>
          <div className="footertext">{t('homepage:footertext1')}</div>
        </Col>
      </Row>
      <Row>
        <Col md={10} lg={10}>
          <div className="footertext-bottom">
            {process.env.REACT_APP_COUNTRY_NAME || 'CountryX'}
            <CcCircle className="cc" color="#FFFF" size="10px" />
          </div>
        </Col>
        <Col md={14} lg={14}>
          <div className="footertext-link-container">
            <a
              href="https://nationalcarbonregistrydemo.tawk.help/"
              target={'_blank'}
              className="footertext-links"
            >
              {t('homepage:Help')}
            </a>
            <a href="https://status.carbreg.org/" target={'blank'} className="footertext-links">
              {t('homepage:Status')}
            </a>
            <a href="/cookie" className="footertext-links">
              {t('homepage:Cookie')}
            </a>
            <a href="codeconduct" className="footertext-links">
              {t('homepage:codeconduct')}
            </a>
            <a href="/terms#termuse" className="footertext-links">
              {t('homepage:terms')}
            </a>
            <a href="/privacy" className="footertext-links">
              {t('homepage:privacy')}
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LayoutFooter;
