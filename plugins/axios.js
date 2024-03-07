export default function ({ $axios, store }) {
    $axios.setHeader('Content-Type', 'application/json');
    $axios.setHeader('Access-Control-Allow-Origin', '*');
    // access-control-allow-origin
    // $axios.onRequest(config => {
    //     config.headers.common['Access-Control-Allow-Origin'] = '*';
    //     config.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, PATCH, OPTIONS';
    //     config.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, X-Request-With';
    //     config.headers.common['Access-Control-Allow-Credentials'] = 'true';
    //     config.headers.common['Access-Control-Max-Age'] = '1728000';
    // });
    $axios.setToken(store.state.token, 'Bearer')
}