import SortBySvg from "../SortBySvg";

export function DropdownSection({ title, DropdownComponent }) {
    return (
        <div className="border-b py-2">
            <div className="flex justify-between items-center font-open-sans space-y-3">
                <h1>{title}</h1>
                <SortBySvg />
            </div>
            <div className="py-4 px-1">
                <DropdownComponent />
            </div>
        </div>
    );
}
