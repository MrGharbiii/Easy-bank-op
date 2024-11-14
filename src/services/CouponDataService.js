import http from "../http-common";

class CouponDataService {
    getAll() {
        return http.get("/coupons");
      }
}
export default new CouponDataService();