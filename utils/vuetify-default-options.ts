import type { ThemeDefinition } from 'vuetify';

const colors = {
    primary: '#4DBB7E',
}

//update default vutify theme to match my design theme colors
const NuxtExampleTheme: ThemeDefinition = {
    dark: false,
    colors: colors,
}

export default {
    theme:{
        defaultTheme:'NuxtExampleTheme', //set my theme as default
        themes:{
            NuxtExampleTheme, //set my theme
        }
    }
 
}