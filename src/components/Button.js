import React from 'react';

export const Button = (props) => {
  const { children } = props;
  return <button className="calc-button">{children}</button>;
};
