import CssBaseline from '@mui/material/CssBaseline'
import Footer from 'Container/Footer/Footer'
import Header from 'Container/Header/Header'
import Main from 'Container/Main/Main'

type Props = {}

const App = (props: Props) => {
  return (
    <>
    <CssBaseline />
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App