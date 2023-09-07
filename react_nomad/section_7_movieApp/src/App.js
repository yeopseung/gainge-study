import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// App.js의 역할
//  메인이자 router 설정하는 곳
//  routes == pages == screens

// React Route DOM
//  path="/" == home
//  Router
//    네트워크 시간에 배웠던 그 라우터 느낌
//  Switch (=Routes)
//    Route를 찾음 (Route == (localhost:3000/movies/123 => movies/123))
//    알맞은 Route를 찾으면 렌더링 함
//  Route
//    하나의 경로 느낌

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
