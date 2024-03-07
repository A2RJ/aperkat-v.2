export default function ({ app, redirect }) {
  if (!app.$isAuthorized("sekniv")) {
    return redirect("/");
  }
}
