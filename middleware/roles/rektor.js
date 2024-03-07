export default function ({ app, redirect }) {
  if (!app.$isAuthorized("rektor")) {
    return redirect("/");
  }
}
