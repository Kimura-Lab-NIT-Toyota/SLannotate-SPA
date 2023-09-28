import { UseAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import Logout from "@/components/Logout";
//全体で共通する部品をまとめたコンポーネント
//ログアウトボタンやヘッダーなど

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    const { route } = useAuthenticator((context) => [context.route]);
    return (
        <Logout/>
    );
}