import Vue from "vue";
import Router from "vue-router";
import MainManu from "@/pages/MainManu";
import Rule from "@/pages/Rule";
import Form from "@/pages/Form";
import AppointMent from "@/pages/AppointMent";
import Registered from "@/pages/Registered";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "MainManu",
      component: MainManu
    },
    {
      path: "/Rule",
      name: "Rule",
      component: Rule
    },
    {
      path: "/Form",
      name: "Form",
      component: Form
    },
    {
      path: "/AppointMent",
      name: "AppointMent",
      component: AppointMent
    },
    {
      path: "/Registered",
      name: "Registered",
      component: Registered
    }
  ]
});
