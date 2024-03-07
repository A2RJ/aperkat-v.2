// app, route, store, redirect
export default ({ app, route, store }, inject) => {
  inject("user", () => {
    const auth = store.state.auth.user;
    return {
      id_user: auth[0].id_user,
      fullname: auth[0].fullname,
      email: auth[0].email,
      role: auth[1].level,
    };
  });

  inject("isAuthorized", (role) => {
    if (!role) throw new Error("Role is required");
    if (typeof role === "string") role = [role];
    return role.includes(store.state.auth.user[1].level);
  });

  inject("isUser", (id) => {
    if (!id) throw new Error("Role is required");
    const userId = app.$user().id_user;
    return id === userId;
  });

  inject("route", () => {
    return route.path;
  });

  inject("lastId", () => {
    if (!route.params && route.params.id) throw new Error("Id is required");
    return route.params.id;
  });

  inject("isYourRKAT", async (id) => {
    if (!id) throw new Error("Id is required");
    const { data } = await app.$axios.get(
      `/rkat/checkIfHasAccess/${id}/${app.$user().id_user}`
    );
    return data;
  });

  inject("isHasAccess", async (id = null) => {
    if (!id) throw new Error("Id is required");
    const user = app.$user();
    if (
      user.role === "rektor" ||
      user.role === "sekniv" ||
      user.role === "warek2" ||
      user.role === "dirKeuangan" ||
      app.$isUser(76)
    ) {
      return true;
    } else {
      const url = `/pengajuan/checkIfHasAccess/${id}/${user.id_user}`;
      const { data } = await app.$axios.get(url);
      return data;
    }
  });
};
