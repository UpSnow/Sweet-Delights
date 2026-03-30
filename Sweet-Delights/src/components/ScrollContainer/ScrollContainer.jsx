import React from 'react';
import './ScrollContainer.css';

const ScrollContainer = ({ children, title, id }) => {
  return (
    <section className="scroll-section">
      {title && <h2 className="scroll-title" id={id}>{title}</h2>}
      
      <div className="scroll-wrapper">
        {children}
      </div>
    </section>
  );
};

export default ScrollContainer;