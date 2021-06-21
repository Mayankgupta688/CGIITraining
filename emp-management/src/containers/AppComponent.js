import { HeaderComponent } from "../components/HeaderComponent";
import { ContentComponent } from "../components/ContentComponent";
import { FooterComponent } from "../components/FooterComponent"

export function AppComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}