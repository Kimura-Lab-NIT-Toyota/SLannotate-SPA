import { Auth } from "aws-amplify";
export default function Logout() {
    return <li><a onClick={() => Auth.signOut()} >ログアウト</a></li>
}