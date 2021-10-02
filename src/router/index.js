import Vue from "vue";
import Router from "vue-router";
import MainManu from "@/components/MainManu";
import Rule from "@/components/Rule";
import Form from "@/components/Form";
import AppointMent from "@/components/AppointMent";
import Registered from "@/components/Registered";

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
