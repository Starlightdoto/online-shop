import React, {FC} from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert, { AlertProps } from '@mui/material/Alert';

interface SimpleSnackBarProps {
    snackBarIsOpen: boolean,
    setSnackBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    snackBarInfoType: any,
}

const SimpleSnackBar:FC<SimpleSnackBarProps> = (props) => {
    const {snackBarIsOpen, setSnackBarIsOpen, snackBarInfoType} = props;
    const enum snackBarMessages {
        "success" = "Item has been added to cart",
        "error" = "Something went wrong",
        "info" = "Info message",
    }


    const handleClick = () => {
        setSnackBarIsOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackBarIsOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                open={snackBarIsOpen}
                autoHideDuration={3000}
                onClose={handleClose}
                message={snackBarInfoType}
                action={action}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                {/* @ts-ignore */ }
                <Alert severity={snackBarInfoType}> {snackBarMessages[snackBarInfoType]} </Alert>
            </Snackbar>
        </div>
    );
}

export default SimpleSnackBar;