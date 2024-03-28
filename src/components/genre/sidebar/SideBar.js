import FictionDropdown from '../FictionDropdown';
import NonfictionDropdown from '../NonfictionDropdown';
import { DropdownSection } from './DropdownSection';
import SidebarMenu from './SidebarMenu';

export function SideBar() {
    const sidebarItems = ["New releases", "Most popular", "Editors picks"];

    return (
        <div className="lg:max-w-[800px] xl:max-w-[1100px] 2xl:max-w-[1600px] mx-auto">
            <div className="flex items-center px-8 gap-12 font-semibold text-[10px] xl:text-[12px] 2xl:text-[15px]">
                <div className="w-1/5">
                    <SidebarMenu items={sidebarItems} />
                    <div className="grid font-semibold text-[10px] xl:text-[15px] 2xl:text-[18px]">
                        <DropdownSection title="Fiction" DropdownComponent={FictionDropdown} />
                        <DropdownSection title="Non-Fiction" DropdownComponent={NonfictionDropdown} />
                        <DropdownSection title="Bumblebee Books" DropdownComponent={BumblebeeDropdown} />
                    </div>
                </div>
                <div className="w-4/5">
                    {/* Content area */}
                </div>
            </div>
        </div>
    );
}