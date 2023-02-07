import React, { FC, useEffect } from 'react'
import useAtomsGuilde from '../atoms';


const SimplePage: FC<any> = ({ children }) => {
  const {
    theme: { colors },
    helpers: { styleSheets },
    atoms: { flex },
    state: { tagsFlags: { box }}
  } = useAtomsGuilde();

  const rootBgColor = box ? colors.bgPrimary : colors.bgSecondary;
  
  useEffect(() => {
    const IS_SSR = typeof document === 'undefined';
    if (!IS_SSR)
      document
        ?.querySelector('body')
        ?.style.setProperty('--bodyColor', rootBgColor);
    return () => {};
  }, [rootBgColor])
  
  const main = styleSheets({
    container: [flex.ct, {
      minWidth: '100%',
      minHeight: '100vh',
      backgroundColor: rootBgColor,
    }],
  });

  return (
    <div css={main.container}>
      { children }
    </div>
  )
}

export default SimplePage;