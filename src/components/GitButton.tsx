import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconGithubWhite from './IconGithubWhite';


const theme = createTheme({
    palette: {
        primary: {
            main: '#9ca3af' // gray-400
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
                    <Button variant='text' startIcon={<IconGithubWhite />} href='https://github.com/antpoo' target='_blank' rel='noopener noreferrer'>
                        My GitHub
                    </Button>
                </ThemeProvider>
            </div>
        );

}

export default GitButton;