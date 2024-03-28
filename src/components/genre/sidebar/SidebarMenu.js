export function SidebarMenu({ items }) {
    return (
        <div className="font-open-sans space-y-3 pb-6 border-b">
            {items.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}
