import React from 'react'
import UsageStatistic from './UsageStatistic'
import DisableButton from './DisableButton'
import SettingsAccordion from './SettingsAccordion'

export default ({
  statistics,
  disabledHosts,
  disabledKeywords,
  currentUrl,
  compressionLevel,
  convertBw,
  onSiteDisable,
  onSiteEnable,
  disabledOnChange,
  disabledKeywordsOnChange,
  convertBwOnChange,
  isWebpSupported,
  compressionLevelOnChange
}) => (
  <div>
    <UsageStatistic
      filesProcessed={statistics.filesProcessed}
      bytesProcessed={statistics.bytesProcessed}
      bytesSaved={statistics.bytesSaved}
    />
    <DisableButton
      disabledHosts={disabledHosts}
      currentUrl={currentUrl}
      onSiteDisable={onSiteDisable}
      onSiteEnable={onSiteEnable}
    />
    <SettingsAccordion
      disabledHosts={disabledHosts}
      disabledKeywords={disabledKeywords}
      disabledKeywordsOnChange={disabledKeywordsOnChange}
      convertBw={convertBw}
      isWebpSupported={isWebpSupported}
      compressionLevel={compressionLevel}
      disabledOnChange={disabledOnChange}
      convertBwOnChange={convertBwOnChange}
      compressionLevelOnChange={compressionLevelOnChange}
    />
  </div>
)
