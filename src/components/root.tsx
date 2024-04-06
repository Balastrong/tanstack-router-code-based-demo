import { Link, Outlet } from "@tanstack/react-router";

const activeProps = {
  className: "font-bold",
};

export const Root = () => {
  return (
    <div className="p-2">
      <h1 className="text-3xl font-semibold mb-2">
        TanStack Router - Code Based
      </h1>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link to="/" activeProps={activeProps}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" activeProps={activeProps}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/$pokemonId"
              params={{ pokemonId: "6" }}
              activeProps={activeProps}
            >
              Charizard
            </Link>
          </li>
          <li>
            <Link
              to="/$pokemonId"
              params={{ pokemonId: "149" }}
              activeProps={activeProps}
            >
              Dragonite
            </Link>
          </li>
          <li>
            <Link to="/search" activeProps={activeProps}>
              Search
            </Link>
          </li>
          <li>
            <Link to="/login" activeProps={activeProps}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <div className="my-2">
        <Outlet />
      </div>
    </div>
  );
};
