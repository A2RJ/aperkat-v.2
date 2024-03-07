export default async function ({ app, route, redirect }) {
  const isHasAccess = await app.$isHasAccess(route.params.id);
  if (!isHasAccess) {
    return redirect("/");
  }
}
