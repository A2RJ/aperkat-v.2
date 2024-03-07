export default async function ({ app, route, redirect }) {
  const sekniv = app.$isAuthorized("sekniv");
  const prodi = app.$isAuthorized("prodi");
  const isYourRKAT = await app.$isYourRKAT(route.params.id);
  const isAuthorized = sekniv || (prodi && isYourRKAT) || isYourRKAT;

  if (!isAuthorized) {
    return redirect("/");
  }
}
