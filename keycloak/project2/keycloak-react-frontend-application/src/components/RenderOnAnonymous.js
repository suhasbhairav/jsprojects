import UserService from "../../../react-frontend/src/services/UserService";
const RenderOnAnonymous = ({children}) => (!UserService.isLoggedIn()) ? children : null;
export default RenderOnAnonymous;