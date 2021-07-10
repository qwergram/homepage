import Base from "./base"
import Blog from "./components/blog";
import Jumbotron from "./components/jumbotron";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import musings from "./paths";
import About from "./about";

const Home = () => (
  <>  
    <Jumbotron />
    <Blog />
  </>
);

const NotFound = () => {
  const content = (
    <>
      That page doesn't exist. <Link to="/">Go Home</Link>.
    </>
  );

  return <Jumbotron title="404" content={content} />;
}

const Index = () => {
  return (
    <Router>
      <Base>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          {
            musings.map(e => <Route exact path={e.slug}>{e.component}</Route>)
          }
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Base>
    </Router>
  );
}

export default Index;
