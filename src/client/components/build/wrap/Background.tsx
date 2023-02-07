// import React, {
//   FC, useRef, ReactNode, useState, useEffect,
// } from 'react';
// import useStyleGuide from  '@/styles';

// interface BackgroundProps {
//   children: ReactNode[] | ReactNode | any;
//   backgrounds: {
//     color?: string;
//     imgSrc?: string;
//     repeat?: string | number;
//     width?: string;
//     height?: string;
//     positionX?: 'center' | 'left' | 'right' | 'bottom' | 'top';
//     positionY?: 'center' | 'left' | 'right' | 'bottom' | 'top';
//     trackId?: string;
//     offsetX?: string;
//     offsetY?: string;
//   }[]
// }

// // ALPHA IN DEVELOPMENT TODO
// const Background: FC<BackgroundProps> = ({
//   children,
//   backgrounds,
// }) => {
//   const toNumber = (key: string | number) => {
//     if (typeof key !== 'string') return key;
//     return parseInt(key.replace('^-\\d*\\.?\\d+$', ''), 10);
//   };

//   const getSize = (size: string | number, key: string, elPr: any) => {
//     if (elPr && typeof size === 'string') {
//       // const isPorcent = size.substr(size.length - 1) === '%';
//       const value = toNumber(size.substr(0, size.length - 1));
//       return Math.round((elPr[key] * value) / 100);
//     }
//     return toNumber(size);
//   };

//   const getColor = (color?: string) => {
//     if (!color) return '';
//     const isPlane = color.substr(0, 1) === '#' || color.substr(0, 1) === 'r';
//     if (isPlane) return `-webkit-linear-gradient(left, ${color}, ${color})`;
//     return color;
//   };

//   const {
//     helpers: { styleSheets },
//     state: { themesFlags },
//   } = useStyleGuide();
//   const ref = useRef(null);
//   const [background, setBackground] = useState('');
//   useEffect(() => {
//     setBackground(backgrounds
//       .reduce((acc, cur, i) => {
//         let position = (cur.positionX && cur.positionY)
//           ? `${cur.positionX} ${cur.positionY}`
//           : '';
//         const width = cur.width || '';
//         const height = cur.height || '';
//         let size = `${width} ${height}`;
//         const color = getColor(cur.color);
  
//         const cn = ref.current || {
//           querySelector: (p: string) => ({
//             getBoundingClientRect: () => ({ x: 0, y: 0, width: 0, height: 0 }),
//           }),
//           getBoundingClientRect: () => ({ x: 0, y: 0, width: 0, height: 0 }),
//         };
//         const el = cn.querySelector(`#${cur.trackId}`);
  
//         if (cur.trackId && el) {
//           const cnPr = cn.getBoundingClientRect();
//           const elPr = el.getBoundingClientRect();
//           const shWi = getSize(cur.width || cur.height || '0', 'width',  elPr);
//           const shHe = getSize(cur.height || cur.width || '0', 'height', elPr);
//           const ofX = toNumber(cur.offsetX || '0');
//           const ofY = toNumber(cur.offsetY || '0');
//           const prX = elPr.x - cnPr.x;
//           const prY = elPr.y - cnPr.y;
//           const wi = elPr.width;
//           const he = elPr.height;
  
//           let positionX = prX;
//           if (cur.positionX === 'right') positionX = prX + wi - shWi;
//           if (cur.positionX === 'center') positionX = prX + wi / 2 - shWi / 2;
//           let positionY = prY;
//           if (cur.positionY === 'bottom') positionY = prY + he - shHe;
//           if (cur.positionY === 'center') positionY = prY + he / 2 - shHe / 2;
  
//           size = `
//               ${getSize(cur.width || cur.height || '', 'width', elPr)}px
//               ${getSize(cur.height || cur.width || '', 'height', elPr)}px
//             `;
//           position = `
//               left ${(positionX + ofX)}px
//               top ${(positionY + ofY)}px
//             `;
//         }
//         return (
//           `
//             ${acc}
//             ${cur.imgSrc ? `url("${cur.imgSrc}")` : ''}
//             ${color}
//             ${position}
//             ${'/'}
//             ${size || ''} 
//             ${cur.repeat || 'no-repeat'}
//             ${i + 1 !== backgrounds.length ? ',' : ''}
//           `
//         );
//       }, ''));
//   }, [themesFlags, backgrounds, getSize]);

//   const css = styleSheets({
//     container: {
//       position: 'relative',
//       display: 'flex',
//       flexDirection: 'column',
//       width: '100%',
//       background: background,
//     },
//   });

//   return (
//     <div
//       id="shades_container"
//       ref={ref}
//       css={css.container}
//     >
//       { children }
//     </div>
//   );
// };

// export default Background;
