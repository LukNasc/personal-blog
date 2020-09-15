//importando modulo original de declarações
import 'styled-components';

//e extendendo dele
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string,
        colors: {
            main: string,
            secondary: string
        }
    }
}

