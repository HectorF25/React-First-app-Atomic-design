import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import EstudianteView from "./views/estudiantes";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route component={EstudianteView} path={"/estudiantes"} />
{/*         <Route component={ContactView} path={"/contact"} />
        <Route component={EstudiantesDetails} path="/estudiantesDetail/:id" />
        <Route component={PersonajesView} path={"/personajes"} />
        <Route component={PersonajesForm} path={"/personajesForm"} />
        <Route component={NotFoundSection} path="*" /> */}
      </Switch>
    </Router>
  );
}

export default App;
