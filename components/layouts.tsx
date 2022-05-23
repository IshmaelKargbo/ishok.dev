import { AppFooter } from "./footer";
import { AppNav } from "./navT"

export const MainLayout = ({ children }) => {
    return (
        <div>
            <AppNav />
            <main>
                {children}
            </main>
            <AppFooter />
        </div>
    );
}