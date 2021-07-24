import { Route, Switch } from 'react-router-dom';
import { Home } from '../components/Home';
import AppCss from '../components/css/AppCss';
import { UserRoutes } from './UserRoutes';
import { UserParams } from '../components/routing/UserParams';
import { Page404 } from '../components/routing/Page404';

// ルーティング処理をComponentから分割
export const Router = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/appCss">
        <AppCss />
      </Route>
      <Route path="/userQuery/:id">
        <UserParams />
      </Route>
      {/* 子要素ではなく、render Propsに渡すことでも実現できる。特に、ネストする時は良い。 */}
      {/* 分割代入はネストすることができる。props.match.urlのみ取りたい時は、{match: {url}} */}
      <Route
        path="/user"
        render={({ match: { url } }) => (
          <Switch>
            {UserRoutes.map((route) => (
              <Route
                key={`${url}${route.path}`}
                path={`${url}${route.path}`}
                exact={route.exact}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      {/* 一致するパスがない場合は、404ページに飛ばす。 */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
