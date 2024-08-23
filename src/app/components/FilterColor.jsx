import React from 'react'

export default function FilterColor() {
  return (
    <>
    <div className={'colorFilterMenu'}>
      <div className={'colorFilterTitle'}>
        <span className={'colorFilterTitleText'}>สี</span>
        <button className={'colorFilterToggleButton'}>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation" className={'colorFilterIcon'}>
            <path d="M20 8.5 12.5 16 5 8.5" stroke="currentColor" strokeWidth="1.5" fill="none"></path>
          </svg>
        </button>
      </div>
      <div className={'colorFilterList'}>
        <div className={'colorFilterItem'}>
          <span className={'colorCircle'} style={{ backgroundColor: 'black' }}></span>
          <span className={'colorLabel'}>Black</span>
        </div>
      </div>
    </div>
    </>
  )
}
