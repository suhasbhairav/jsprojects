import UserService from "../../../react-frontend/src/services/UserService";

const RenderOnAuthenticated = ({children}) => (UserService.isLoggedIn()) ? children : null;

export default RenderOnAuthenticated;