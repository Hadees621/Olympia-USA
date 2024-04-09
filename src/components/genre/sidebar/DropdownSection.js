import SortBySvg from "../SortBySvg";

export function DropdownSection({ title, DropdownComponent }) {
  return (
    <div className="border-b py-2">
      <div className="flex justify-between items-center font-open-sans py-2">
        <h1 className="text-[11px] xl:text-[12px] 2xl:text-[20px] font-semibold">
          {title}
        </h1>
        <SortBySvg />
      </div>
      <div className="py-4">
        <DropdownComponent />
      </div>
    </div>
  );
}
