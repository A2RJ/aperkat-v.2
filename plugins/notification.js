export default ({ app, route, store }, inject) => {
  inject("sendNotification", async (id) => {
    try {
      if (!id) throw new Error("Send notification require id");
      const url = "/pengajuan/getListNotification/" + id;
      const { data } = await app.$axios.get(url);
      const { number, text } = data;
      const sendNotif = await app.$axios.post(
        "http://localhost:9000/wa/sendWaNotification",
        { number, text }
      );
      return sendNotif;
    } catch (error) {
      return Promise.reject(error);
    }
  });
};
