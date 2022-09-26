import React, { createContext } from 'react'

export const ThemeContext = React.createContext({
    theme: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    themeToggler: () => {}
})
