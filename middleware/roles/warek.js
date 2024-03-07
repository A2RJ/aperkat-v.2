export default function ({ app, redirect }) {
  if (!app.$isAuthorized("warek")) {
    return redirect("/");
  }
}
