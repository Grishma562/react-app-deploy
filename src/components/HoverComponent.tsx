import React from 'react';
import withHover from '../hoc/withHover';

interface HoverComponentProps {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const HoverComponent: React.FC<HoverComponentProps> = ({ isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <>
        <h3>Task Three</h3>
        <div
        style={{
            padding: '10px',
            width: '210px',
            backgroundColor: isHovered ? 'lightgreen' : 'lightpink',
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
          <p>{isHovered ? 'Hovered!' : 'Not Hovered'}</p>
        </div>
    </>
  );
};

const HoverComponentWithHover = withHover(HoverComponent);

export default HoverComponentWithHover;
