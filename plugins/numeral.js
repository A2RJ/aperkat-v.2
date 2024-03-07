import Vue from "vue";
import numeral from "numeral";
import currency from "vue-filter-number-format";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("VSelect", vSelect);
Vue.filter("currency", currency(numeral));

Vue.filter("capitalize", (value) => {
  if (!value) return "";

  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter("convertDate", (value) => {
  if (!value) return "";

  return new Date(`${value}`).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

Vue.filter("validasiStatus", (value) => {
  if (!value) return "";

  if (value === 0) return "danger";
  else if (value === 1) return "warning";
  else return "success";
});

Vue.filter("validasiDetail", (value) => {
  if (!value) return "";

  if (value === 0) return "Ditolak: "
  else if (value === 1) return "Input/Revisi: "
  else if (value === 2) return "Diterima: "
  else if (value === 3) return "Pencairan: "
  else if (value === 4) return "Completed: "
  else if (value === 5) return "Completed: "
});

Vue.use({
  install(Vue, options) {
    Vue.prototype.$formatRupiah = (params) => {
      if (params !== null && params !== undefined) {
        const numberString = params.replace(/[^,\d]/g, "").toString();
        const split = numberString.split(",");
        const sisa = split[0].length % 3;
        let rupiah = split[0].substr(0, sisa);
        const ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);
        let separator = null;

        if (ribuan) {
          separator = sisa ? "." : "";
          rupiah += separator + ribuan.join(".");
        }
        rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
        return rupiah;
      }
    };
  },
});
