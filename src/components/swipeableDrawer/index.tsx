import { Box, Drawer } from "@mui/material"

interface IProps {
    anchor: 'top' | 'left' | 'bottom' | 'right';
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const CustomSwipeableDrawer = ({anchor, children, isOpen, onClose}:IProps) => {
    return (
        <Drawer
        anchor={anchor}
        open={isOpen}
        onClose={onClose}
        sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Box sx={{width: '350px'}}>
        {children}
        </Box>
      </Drawer>
    )
}