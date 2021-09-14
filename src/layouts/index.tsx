import React, { FC } from 'react';
import { Header, Footer } from '@/components/organisms';
import { HeaderProps } from '@/components/organisms/Header/Header';
import { FooterProps } from '@/components/organisms/Footer/Footer';

interface LayoutProps extends HeaderProps, FooterProps {}

export const Layout: FC<LayoutProps> = (props) => {
  const {
    children,
    scene,
    transparent = false,
    showLocale,
    hasLoginBtn,
  } = props;
  return (
    <React.Fragment>
      <div style={{ backgroundColor: '#ffffff' }}>
        <div style={{ position: 'absolute', top: '150px' }}>
          <div style={{ width: '100%' }}>
            <img src="/home/dots2.png" />
          </div>
          <div style={{ width: '100%' }}>
            <img src="/home/dots.png" />
          </div>
        </div>
        <Header
          scene={scene}
          transparent={transparent}
          showLocale={showLocale}
          hasLoginBtn={hasLoginBtn}
        />
        {children}
        <Footer scene={scene} />
      </div>
    </React.Fragment>
  );
};
