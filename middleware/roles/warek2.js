export default function ({ app, redirect }) {
  if (!app.$isAuthorized("warek2")) {
    return redirect("/");
  }
}
