export default function ({ app, redirect }) {
  if (!app.$isAuthorized("prodi")) {
    return redirect("/");
  }
}
