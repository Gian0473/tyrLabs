import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
 index("routes/Home.tsx"),
 route("/nosotros", "routes/About.tsx"),
 route("/productos", "routes/Products.tsx"),
 route("/contacto", "routes/Contact.tsx"),

] satisfies RouteConfig;
