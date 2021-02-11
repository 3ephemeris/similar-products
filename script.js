import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 200 }, // below normal load
    { duration: '5m', target: 400 },
    { duration: '2m', target: 1000 }, // normal load
    { duration: '5m', target: 1000 },
    { duration: '2m', target: 1500 }, // around the breaking point
    { duration: '5m', target: 1500 },
    { duration: '2m', target: 2000 }, // beyond the breaking point
    { duration: '5m', target: 1500 },
    { duration: '5m', target: 200 }, // scale down. Recovery stage.
  ],
};

export default function () {
  let randomNumber = Math.floor(Math.random() * (1000000 - 1 + 1) + 1);
  let res = http.get(`http://localhost:3002/api/products/${randomNumber}`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}