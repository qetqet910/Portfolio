import Header from '../src/components/header/header'
import Main from '../src/components/main/main'

import { darkTheme, lightTheme } from './style/Theme';
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil'
import { isDarkAtom } from '../src/recoil/atom';

function App() {
  const darkmode = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;