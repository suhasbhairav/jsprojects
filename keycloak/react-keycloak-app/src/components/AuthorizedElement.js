import AuthorizedFunction from '../../utilities/AuthorizedFunction';

export type currentUserRole = any[] | undefined;

export default function AuthorizedElement({ roles, children }: any) {

    return AuthorizedFunction(roles) && children;
}