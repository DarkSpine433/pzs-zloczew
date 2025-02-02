'use client'
import CookieConsent from 'react-cookie-consent'

type Props = {}

const CookiesConsentClinent = (props: Props) => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Rozumiem"
      cookieName="CookiesConsent"
      style={{ background: '#f1f1f1', color: '#4e503b', fontSize: '13px' }}
      buttonStyle={{ color: '#f1f1f1', fontSize: '13px', background: '#0064E9' }}
    >
      Ta strona używa plików cookies, localStorage i sessionStorage do poprawnego funkcjonowania i
      zapewnienia lepszej jakości usług.{' '}
      <span style={{ fontSize: '10px' }}>
        Korzystając z tej strony, wyrażasz zgode na ich użycie.
      </span>
    </CookieConsent>
  )
}

export default CookiesConsentClinent
