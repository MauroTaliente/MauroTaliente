import React, { FC, useEffect } from 'react'
import useAtomsGuilde from '../atoms';


const SimplePage: FC<any> = ({ children }) => {
  const {
    theme: { colors },
    helpers: { styleSheets },
    atoms: { flex },
  } = useAtomsGuilde();
  
  const IS_SSR = typeof document === 'undefined';
  useEffect(() => {
    if (!IS_SSR) {
      document
        ?.querySelector('body')
        ?.style.setProperty('--bodyColor', colors.bgSecondary);
    }
    return () => {};
  }, [IS_SSR, colors.bgSecondary])
  
  const main = styleSheets({
    container: {
      minHeight: '100vh',
      backgroundColor: colors.bgSecondary,
    },
  });

  return (
    <div css={[flex.ct, main.container]}>
      { children }
    </div>
  )
}

export default SimplePage;