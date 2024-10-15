import TopBar from "../components/top-bar/top-bar";
import Slides from "../components/slides/slides"
import ClientSection from "../components/clients/clients";
import Community from "../components/community/community";
import Security from "../components/security/security";
import Achievements from "../components/achievements/achievements";
import Unlock from "../components/unlock/unlock";
import Customer from "../components/customers/customers";
import CommunityUpdate from "../components/community-update/community-update";
import Frame from "../components/frame/fame";

function MainPage() {
    return (
        <>
            <TopBar />
            <Slides />
            <ClientSection />
            <Community />
            <Security />
            <Achievements />
            <Unlock />
            <Customer />
            <CommunityUpdate />
            <Frame />

        </>
    )
}

export default MainPage;