import { useState } from 'react';

const Block = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? 'active' : ''}>
      {children}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  return (
    <Block mouseEnterCallbak={mouseEnterCallbak}>
      <img src={imgSrc} alt={imgAlt} />
    </Block>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  return (
    <Block mouseEnterCallbak={mouseEnterCallbak}>
      <p>{content}</p>
    </Block>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  return (
    <Block mouseEnterCallbak={mouseEnterCallbak}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </Block>
  );
};
