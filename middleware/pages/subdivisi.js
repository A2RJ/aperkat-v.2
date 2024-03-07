export default async function ({ app, redirect }) {
  const isAuthorized =
    app.$isAuthorized("sekniv") ||
    app.$isAuthorized("rektor") ||
    app.$isAuthorized("warek") ||
    app.$isAuthorized("warek2") ||
    app.$isAuthorized("dirKeuangan") ||
    app.$isAuthorized("fakultas");

  if (!isAuthorized) {
    return redirect("/");
  }
}
