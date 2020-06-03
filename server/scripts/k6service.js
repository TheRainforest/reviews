import http from 'k6/http';
import { sleep, check } from 'k6';
const { getRandom, review } = require('./k6TestData.js');

export let options = {
  stages: [
    { duration: '5s', target: 1 },
    { duration: '25s', target: 10 },
    { duration: '30s', target: 100 },
    { duration: '1m', target: 300 },
    { duration: '1m', target: 600 },
    { duration: '1m', target: 1000 },
    { duration: '1m', target: 1000 },
    { duration: '1m', target: 600 },
    { duration: '1m', target: 300 },
    { duration: '1m', target: 0 },
  ],
};

const base_url = 'http://localhost:3004/api/allreviews';
let postCount = 5;

export default function() {
  let randomId = getRandom(990000, 998000);
  let path = `${base_url}/${randomId}`;

  // Test /GET
  check(http.(path), {
    "/GET received status 200": r => r.status === 200
  });
  sleep(1);

  // Test /POST on every 5th turn
  postCount--;
  if (postCount === 0) {
    randomId = getRandom(998000, 999000);
    let postdata = review[getRandom(0, 4)];
    let postTest = http.post(path, postdata);
    check(postTest, {
      "/POST received status 200": r => r.status === 200
    });
    postCount = 5;
  }
  sleep(1);
};
