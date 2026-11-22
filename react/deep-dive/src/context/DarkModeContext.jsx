import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

// 우산 만들기
// React 18이하 버전에서 context provider 작성방식

// export function DarkModeProvider({ children }) {
//   const [darkMode, setDarkMode] = useState(false);
//   const toggleDarkMode = () => setDarkMode((dark) => !dark);

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// }

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((dark) => !dark);

  return (
    <DarkModeContext value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext>
  );
}
