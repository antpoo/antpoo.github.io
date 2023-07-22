import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import GithubWhiteIcon from './icons/GithubWhiteIcon';


const theme : Theme = createTheme({
    palette: {
        primary: {
            main: '#f3f4f6' // gray-200
        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        primary: Palette['primary'];
    }

    interface PaletteOptions {
        primary?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        primary: true;
    }
}

function GitButton() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button variant='text' startIcon={<GithubWhiteIcon />} href='https://github.com/antpoo' target='_blank' rel='noopener noreferrer'>
                    My GitHub
                </Button>
            </ThemeProvider>
        </div>
    );

}

export default GitButton;