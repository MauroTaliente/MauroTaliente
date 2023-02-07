import React, { FC, ReactElement, ReactNode, useMemo, useState } from 'react'

type Aling =  'start' | 'center' | 'end';

type FloatElementsProps = {
  list?: readonly {
    render: ReactElement;
    trackId: string;
    size: readonly number[];
    aling: readonly Aling[];
    offset?: readonly  number[],
  }[];
  children?: ReactNode,
  zIndex: number,
}

const FloatElements : FC<FloatElementsProps>= ({
  list = [],
  zIndex = 1,
  children,
}) => {
  const [root, setRoot] = useState<any>(null);
  const render = useMemo(() => {
    if (!root) return null;
    return list.map((data, i) => {
      const traking = root.querySelector(`#${data.trackId}`);
      const ew = data.size[0] || 0;
      const eh = data.size[1] || 0;
      const tx = traking?.getBoundingClientRect().x || 0;
      const ty = traking?.getBoundingClientRect().y || 0;
      const tw = traking?.getBoundingClientRect().width || 0;
      const th = traking?.getBoundingClientRect().height || 0;
      const dx = (() => {
        if (data.aling[0] === 'start') return tx;
        if (data.aling[0] === 'center') return tx + ((tw - ew) / 2);
        return tx + (tw - ew);
      })();
      const dy = (() => {
        if (data.aling[1] === 'start') return ty;
        if (data.aling[1] === 'center') return ty + ((th - eh) / 2);
        return ty + (th - eh);
      })();
      return (
        <div key={i} css={{
          zIndex,
          display: 'flex',
          position: 'absolute',
          left: `${dx}px`,
          top: `${dy}px`,
          width: ew,
          height: eh,
        }}>
          { data.render }
        </div>
      )
    });
  }, [list, root, zIndex]);

  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%', 
      flex: 1,
    }}
    ref={setRoot}
    >
      { render }
      { children }
    </div>
  );
};

export default FloatElements;