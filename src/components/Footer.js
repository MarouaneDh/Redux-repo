import React from "react";
import { VisibilityFilters } from "../actions";
import FilterLink from "../containers/FilterLink";

const Footer = () => (
  <div className="foot">
    <span>Show</span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLink>
  </div>
);

export default Footer;
