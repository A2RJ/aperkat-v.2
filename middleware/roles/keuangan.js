export default function ({ app, redirect }) {
  if (!app.$isAuthorized("dirKeuangan")) {
    return redirect("/");
  }
}
