export const ENDPOINTS = [
    {applicationName:'Provider Portal',url:'https://api.housing-dp.dev/provider/healthcheck', status:'FAIL',info:''},
    {applicationName:'Public Portal' , url:'https://api.housing-dp.dev/public/healthcheck',status:'FAIL',info:''},
    {applicationName:'Gateway',url:'http://10.146.17.14:3000/api/healthcheck.json',status:'FAIL',info:''},
    {applicationName:'Admin Portal',url:' https://api.housing-dp.dev/admin/healthcheck',status:'FAIL',info:''},
    {applicationName:'OSRM',url:'https://nominatim.openstreetmap.org/status.php',status:'FAIL',info:''},
    {applicationName:'Key Cloak',url:'https://signin.housing-dp.dev/auth/health',status:'FAIL',info:''},
    {applicationName:'UI Provider',url:'https://provider-qa.housing-dp.dev/#/system-admin/general/users',status:'FAIL',info:''},
    {applicationName:'UI Admin',url:'https://admin-qa.housing-dp.dev/#/system-admin/general/users',status:'FAIL',info:''},
    {applicationName:'UI Public',url:'https://northshirecc-qa.housing-dp.dev/health.json',status:'FAIL',info:''}
]

export const URI_Names = [
    {url:'/public',name:"public portal"},
    {url:'/provider',name:"provider portal"},
    {url:'/internal',name:"internal portal"},
]