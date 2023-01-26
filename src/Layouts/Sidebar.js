import { Link } from "react-router-dom";

function Sidebar () {
    return(
        <>
         <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">       
<Link class="sidebar-brand d-flex align-items-center justify-content-center" to={"/"}>
    <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
    </div>
    <div class="sidebar-brand-text mx-3">School Management</div>
</Link>
<hr class="sidebar-divider my-0"/>
<li class="nav-item active">
<Link class="nav-link collapsed" to={"/dashboard"}  data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-cog"></i>
        <span>Dashboard</span>
    </Link><hr class="sidebar-divider my-0"/>
    <Link class="nav-link collapsed" to={"/teachers/list"}  data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-cog"></i>
        <span>Teachers</span>
    </Link><hr class="sidebar-divider my-0"/>
    <Link class="nav-link collapsed" to={"/students/list"}  data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-cog"></i>
        <span>Students</span>
    </Link>
</li>
<hr class="sidebar-divider"/>
</ul>
        </>
    )
}
export default Sidebar;