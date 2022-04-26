import { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ClassicalFetchA from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import Layout from './components/Layout'
import { StateProvider } from './context/StateProvider'

const App: FC = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Layout>
          <Switch>
            <Route exact path="/fetch-a">
              <ClassicalFetchA />
            </Route>
            <Route exact path="/fetch-b">
              <ClassicalFetchB />
            </Route>
          </Switch>
        </Layout>
      </StateProvider>
    </BrowserRouter>
  )
}

export default App
