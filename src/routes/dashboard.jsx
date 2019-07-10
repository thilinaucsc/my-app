// @material-ui/icons
// import Dashboard from "@material-ui/icons/Dashboard";
// import TableChart from "@material-ui/icons/TableChart";
// import Person from "@material-ui/icons/Person";
// import Create from "@material-ui/icons/Create";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// core components/views
import DashboardPage from "../views/Dashboard.jsx";
/*
import TableList from "../views/TableList/TableList.jsx";*/
import ViewCustomer from "../views/viewCustomer.jsx";
import Main from "../component/main.jsx";
import Main2 from "../component/main2.jsx";
/*
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";*/

const dashboardRoutes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Dashboard",
        icon: "",
        component: DashboardPage
    },
    {
        path: "/view",
        sidebarName: "Approval Create",
        navbarName: "Approval Create",
        icon: "",
        component: ViewCustomer
    },
    {
        path: "/dog",
        sidebarName: "Table List",
        navbarName: "Table List",
        icon: "content_paste",
        component: Main
    },
    {
        path: "/employee",
        sidebarName: "Table List",
        navbarName: "Table List",
        icon: "content_paste",
        component: Main2
    },
    /*{
        path: "/table",
        sidebarName: "Table List",
        navbarName: "Table List",
        icon: "content_paste",
        component: TableList
    },
    {
        path: "/enhanced-table",
        sidebarName: "Enhanced Table",
        navbarName: "Enhanced Table",
        icon: TableChart,
        component: EnhancedTable
    },*/
    /*{
      path: "/typography",
      sidebarName: "Typography",
      navbarName: "Typography",
      icon: LibraryBooks,
      component: Typography
    },
    {
      path: "/icons",
      sidebarName: "Icons",
      navbarName: "Icons",
      icon: BubbleChart,
      component: Icons
    },
    {
      path: "/maps",
      sidebarName: "Maps",
      navbarName: "Map",
      icon: LocationOn,
      component: Maps
    },
    {
      path: "/notifications",
      sidebarName: "Notifications",
      navbarName: "Notifications",
      icon: Notifications,
      component: NotificationsPage
    },
    {
      path: "/upgrade-to-pro",
      sidebarName: "Upgrade To PRO",
      navbarName: "Upgrade To PRO",
      icon: Unarchive,
      component: UpgradeToPro
    },*/
    {redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect"}
];

export default dashboardRoutes;
