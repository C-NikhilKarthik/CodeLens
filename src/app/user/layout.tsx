import { Nav, NavLink } from "@/components/Nav";


export const dynamic = "force-dynamic"
export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        <Nav>
            <NavLink href="/user">Dashboard</NavLink>
        </Nav>
        <div className="container my-6">{children}</div>
    </>
}