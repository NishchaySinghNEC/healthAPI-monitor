export const ENDPOINTS = [
    {applicationName:'Provider Portal API',url:'https://api.housing-dp.dev/provider/healthcheck', status:'FAIL',info:'', type: 'system'},
    {applicationName:'Customer Portal API' , url:'https://api.housing-dp.dev/public/healthcheck',status:'FAIL',info:'', type: 'system'},
    {applicationName:'Gateway',url:'http://10.146.17.14:5000/apibuilderPing.json',status:'FAIL',info:'', type: 'services'},
    {applicationName:'Admin Portal API',url:' https://api.housing-dp.dev/admin/healthcheck',status:'FAIL',info:'', type: 'system'},
    {applicationName:'OSRM',url:'https://nominatim.openstreetmap.org/status.php',status:'FAIL',info:'', type: 'services'},
    {applicationName:'Key Cloak',url:'https://signin.housing-dp.dev/auth/health',status:'FAIL',info:'', type: 'services'},
    {applicationName:'Provider API',url:'https://provider-qa.housing-dp.dev/#/system-admin/general/users',status:'FAIL',info:'', type: 'ui'},
    {applicationName:'Admin API',url:'https://admin-qa.housing-dp.dev/#/system-admin/general/users',status:'FAIL',info:'', type: 'ui'},
    {applicationName:'Public API',url:'https://northshirecc-qa.housing-dp.dev/health.json',status:'FAIL',info:'', type: 'ui'}
]

export const URI_Names = [
    {url:'/public',name:"public portal"},
    {url:'/provider',name:"provider portal"},
    {url:'/internal',name:"internal portal"},
]