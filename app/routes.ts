import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("product-details/:productId", "routes/product-details/product-details.tsx"),
    route("category-details/:categoryId", "routes/category-details/category-details.tsx"),
    route("/cart", "routes/cart/cart.tsx"),
] satisfies RouteConfig;
