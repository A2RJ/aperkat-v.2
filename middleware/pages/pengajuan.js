export default async function ({ app, route, redirect }) {
  const keuangan = app.$isAuthorized("dirKeuangan");
  const prodi = app.$isAuthorized("prodi");
  const user = app.$isUser(76);
  const isAuthorized = keuangan || prodi || user;
  if (!isAuthorized) {
    return redirect("/");
  }
}
