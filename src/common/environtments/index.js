const { VUE_APP_BASE_API_DOMAIN } = process.env
const domain = `${VUE_APP_BASE_API_DOMAIN}`;
const apiURL = `${VUE_APP_BASE_API_DOMAIN}api/admin/`;
const apiUpload = `${VUE_APP_BASE_API_DOMAIN}api/share/upload`
export { domain, apiURL, apiUpload }
