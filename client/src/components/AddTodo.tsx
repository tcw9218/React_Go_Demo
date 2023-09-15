import {useState} from 'react'
import { useForm } from '@mantine/form'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const AddTodo = () => {
    const [open, setOpen] = useState(false)
    const form = useForm({
        initialValues:{
            item:""
        }
    })

    return <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
        open={open}
        onClose = {() => setOpen(false)}
        
        >
            <Box sx={style}>
                <Typography  variant="h6" component="h2">
                Text in a modal
                </Typography>
                <Typography  sx={{ mt: 2 }}>
                    Text
                </Typography>
            </Box>
        </Modal>
    </>
}
