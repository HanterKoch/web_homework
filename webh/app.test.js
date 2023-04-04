const router = require('./router.js')

test('Проверка создания роутера', () => {
  expect(router.create()).toBeTruthy();
});

test('Проверка пост запроса', () => {
  let ROUTER = router.create();
  expect(ROUTER.serveRouter('POST', '/').name).toBe('post');
})

test('Проверка гет запроса', () => {
  let ROUTER = router.create();
  expect(ROUTER.serveRouter('GET', '/').name).toBe('get');
})

test('проверка на наличие url', () => {
  let ROUTER = router.create();
  expect(ROUTER.serveRouter('GET', '/1').name).toBe('error');
});

test('проверка на добавление пути и метода', () => {
  let ROUTER = router.create();
  expect(ROUTER.serveRouter('SOME', '/12').name).toBe('error');
  function some(){};
  ROUTER.appendRoute('SOME', '/12', some)
  expect(ROUTER.serveRouter('SOME', '/12').name).toBe('some');
});

test('проверка критических значений на добавление', () => {
  let ROUTER = router.create();
  function some0(){};
  ROUTER.appendRoute(1, 1, some0)
  expect(ROUTER.serveRouter(1, 1).name).toBe('error');
})

