import { useFilterGroup } from "../hooks/useFilterGroup";

import { Filters } from "../../../../infrastructure/services/interfaces/IProductService";
import { SelectedFilters } from "../slice/filtersSlice";

import Checkbox from "../../../common/components/Checkbox/Checkbox";

import { FilterGroupWrapper, FiltersWrapper } from "./FilterGroup.styles";
import { SpanBold } from "../../../common/styles";
import { Button } from "../../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type FilterGroupProps = {
  heading: string;
  items: Filters[];
};

const FilterGroup = ({ heading, items }: FilterGroupProps) => {
  const {
    selectedFilters,
    filtersToShow,
    isExpanded,
    setIsExpanded,
    doesExceedRenderLimit,
    handleChange,
    filterIsEmpty,
  } = useFilterGroup(heading, items);

  return (
    <FilterGroupWrapper>
      <SpanBold>{heading}:</SpanBold>
      <FiltersWrapper>
        {filtersToShow.map((item) => {
          if (!filterIsEmpty(item)) {
            return (
              <Checkbox
                key={item._id}
                label={item._id}
                checked={selectedFilters[
                  heading.toLowerCase() as keyof SelectedFilters
                ].includes(item._id.toLowerCase())}
                onChange={(e: React.SyntheticEvent) => handleChange(e, item._id)}
              />
            );
          } else {
            return null;
          }
        })}

        {doesExceedRenderLimit &&
          (isExpanded ? (
            <Button variant="transparent" onClick={() => setIsExpanded(false)}>
              Show less
              <FontAwesomeIcon icon={faChevronUp} size="sm" />
            </Button>
          ) : (
            <Button variant="transparent" onClick={() => setIsExpanded(true)}>
              Show More
              <FontAwesomeIcon icon={faChevronDown} size="sm" />
            </Button>
          ))}
      </FiltersWrapper>
    </FilterGroupWrapper>
  );
};

export default FilterGroup;
