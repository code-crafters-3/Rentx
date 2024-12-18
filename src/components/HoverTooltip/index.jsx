import { cloneElement, useState } from 'react';

import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import { Fade, Paper } from '@mui/material';
import MuiPopper from '@mui/material/Popper';

const StyledPopper = styled(MuiPopper)(({ theme }) => ({
  zIndex: 1,
  '&[data-popper-placement*="bottom"] $arrow': {
    top: 0,
    left: 0,
    marginTop: '-0.9em',
    width: '3em',
    height: '1em',
    '&::before': {
      borderWidth: '0 1em 1em 1em',
      borderColor: `transparent transparent ${theme.palette.background.paper} transparent`
    }
  },
  '&[data-popper-placement*="top"] $arrow': {
    bottom: 0,
    left: 0,
    marginBottom: '-0.9em',
    width: '3em',
    height: '1em',
    '&::before': {
      borderWidth: '1em 1em 0 1em',
      borderColor: `${theme.palette.background.paper} transparent transparent transparent`
    }
  },
  '&[data-popper-placement*="right"] $arrow': {
    left: 0,
    marginLeft: '-0.9em',
    height: '3em',
    width: '1em',
    '&::before': {
      borderWidth: '1em 1em 1em 0',
      borderColor: `transparent ${theme.palette.background.paper} transparent transparent`
    }
  },
  '&[data-popper-placement*="left"] $arrow': {
    right: 0,
    marginRight: '-0.9em',
    height: '3em',
    width: '1em',
    '&::before': {
      borderWidth: '1em 0 1em 1em',
      borderColor: `transparent transparent transparent ${theme.palette.background.paper}`
    }
  }
}));

/* const Arrow = styled('div')({
  position: 'absolute',
  fontSize: 7,
  width: '3em',
  height: '3em',
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    borderStyle: 'solid'
  }
});
 */
function HoverTooltip({ children, content, disabled }) {
  const [arrowRef, setArrowRef] = useState(null);
  const [childNode, setChildNode] = useState(null);
  const [open, setOpen] = useState(null);

  const handlePopoverOpen = () => {
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setOpen(false);
  };

  if (disabled) {
    return children;
  }

  const Content = content;
  return (
    <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
      {cloneElement(children, { ...children.props, ref: setChildNode })}
      <StyledPopper
        open={open}
        anchorEl={childNode}
        placement="right-start"
        transition
        modifiers={{
          preventOverflow: {
            enabled: true,
            boundariesElement: 'window'
          },
          arrow: {
            enabled: true,
            element: arrowRef
          }
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              {/*  <Arrow ref={setArrowRef} /> */}
              {Content}
            </Paper>
          </Fade>
        )}
      </StyledPopper>
    </div>
  );
}

export default HoverTooltip;

HoverTooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  disabled: PropTypes.bool
};
