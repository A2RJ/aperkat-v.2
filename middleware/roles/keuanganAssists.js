export default function ({ app, redirect }) {
  if (!app.$isAuthorized("fakultas")) {
    return redirect("/");
  }
}
