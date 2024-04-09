export function SidebarMenu({ items }) {
    return (
        <div className="font-open-sans space-y-3 pb-6 border-b text-[11px] xl:text-[12px] 2xl:text-[20px]">
            {items.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}
