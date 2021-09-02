import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline } from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
            <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PermIdentity/>
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <Storefront/>
                            products
                        </li>
                        <li className="sidebarListItem">
                            <BarChart/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline/>
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
