import { CloseCircleOutlined } from "@ant-design/icons"
import { Box, IconButton, Typography } from "@mui/material"

interface IProps {
    onClose: () => void;
}

export const SettingsHeader = ({onClose}: IProps) => {
    return (
        <Box sx={{padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: (theme) => theme.palette.primary.main}}>
          <Typography sx={{color: '#FFF'}} fontWeight="bold" variant="h4">Customização</Typography>
          <IconButton onClick={() => onClose()}>
            <CloseCircleOutlined style={{color: '#FFF', fontSize: '20px'}}/>
          </IconButton>
        </Box>
    )
}