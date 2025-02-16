import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import { SeedButton } from './SeedButton'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{ width: 'fit-content' }}>
        <Banner className={`${baseClass}__banner`} type="error">
          <h2>Before any changes read documentation⚠️</h2>
          <h5>
            <i>And Be Sure You Know What You Are Doing</i>
          </h5>
        </Banner>
      </div>
      <a
        target="_blank"
        href={`https://github.com/${process.env.NEXT_PUBLIC_NAME_OWNER_OF_PZS_ZLOCZEW_WEBSITE}/${process.env.NEXT_PUBLIC_REPO_NAME_OF_PZS_ZLOCZEW_WEBSITE}`}
      >
        <div style={{ width: 'fit-content' }}>
          <Banner className={`${baseClass}__banner`} type="info">
            Link To Documentation
          </Banner>
        </div>{' '}
      </a>
    </div>
  )
}

export default BeforeDashboard
