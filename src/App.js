import classes from './style/App.module.scss'
import Layout from './hoc/Layout'


function App() {
  return (
    <Layout>
      <div className={classes.App}>
        It's working!
      </div>
    </Layout>

  )
}

export default App

