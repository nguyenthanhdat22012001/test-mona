import '../styles/globals.css'
import '../styles/app.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className='wrapper'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
