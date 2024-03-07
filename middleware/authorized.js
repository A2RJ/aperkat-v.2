export default function ({ app, route, store, redirect }) {
  const auth = store.state.auth;
  const { fullPath } = route;

  if (!auth.loggedIn) {
    if (fullPath !== "/login") return redirect("/login");
  } else {
    if (fullPath.includes("/nonrkat") && !app.$isAuthorized("sekniv")) {
      return redirect("/");
    }
  }
}
