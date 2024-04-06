import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { ItemFilters } from "../types/item-filters";

const routeApi = getRouteApi("/search");

export function Search() {
  const { query, hasDiscount, categories } = routeApi.useSearch();
  const navigate = useNavigate({ from: routeApi.id });

  const updateFilters = (name: keyof ItemFilters, value: unknown) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) });
  };

  return (
    <div className="flex flex-col gap-2">
      <div>You searched for:</div>
      <div className="flex gap-2 items-center">
        <div className="w-45">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
              value={query}
              onChange={(e) => {
                updateFilters("query", e.target.value);
              }}
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Query
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="hasDiscount"
          checked={hasDiscount}
          onChange={(e) => updateFilters("hasDiscount", e.target.checked)}
          className="cursor-pointer"
        />
        <label htmlFor="hasDiscount" className="cursor-pointer">
          Has Discount
        </label>
      </div>
      <div className="flex gap-2 items-center">
        <select
          multiple
          onChange={(e) => {
            updateFilters(
              "categories",
              Array.from(e.target.selectedOptions, (option) => option.value)
            );
          }}
          value={categories}
        >
          {["electronics", "clothing", "books", "toys"].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
    </div>
  );
}
