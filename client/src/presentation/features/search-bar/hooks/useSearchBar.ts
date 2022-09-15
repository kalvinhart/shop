import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Product } from "../../../../domain/models/Product";

import HttpService from "../../../../infrastructure/services/HttpService/HttpService";
import ProductService from "../../../../infrastructure/services/ProductService/ProductService";

import { formatOldSearchParams } from "../../../common/utils/formatSearchParams";

export const useSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchBarRef = useRef<HTMLFormElement>(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const getSuggestions = useCallback(async (term: string) => {
    if (term === "") return;

    setLoading(true);

    const httpService = new HttpService();
    const productService = new ProductService(httpService);
    const params = new URLSearchParams({ name: term });

    const suggestionData = await productService.getAllProducts(params);

    const newSuggestions = suggestionData.products;

    setSuggestions(newSuggestions);
    setLoading(false);
  }, []);

  const clearSuggestions = useCallback(() => setSuggestions(null), []);

  // Clears search term if a suggestion is clicked
  const handleLinkClick = () => {
    setSearchTerm("");
  };

  // Displays suggestions once length of input >= 3
  const handleInputChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      setSearchTerm((e.target as HTMLInputElement).value);

      if (searchTerm.length < 3) return;

      if (!showSuggestions) {
        setShowSuggestions(true);
        return;
      }
    },
    [showSuggestions, searchTerm]
  );

  // Updates search params with new search term
  // then navigates to that new URL
  const handleSearchSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      if (searchTerm) {
        const oldParams = formatOldSearchParams(searchParams);
        const newParams = {
          ...oldParams,
          name: searchTerm,
        };

        const paramsString = new URLSearchParams(newParams).toString();

        navigate(`/products?${paramsString}`);

        setSearchTerm("");
      }
    },
    [searchParams, navigate, searchTerm]
  );

  // Will only show suggestions once search term is >= 3 characters
  const handleSearchBarFocus = () => {
    if (searchTerm.length < 3) return;

    setShowSuggestions(true);
  };

  // Will close suggestion box when Escape key is pressed
  // and clear the suggestions
  const handleEscKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearSuggestions();
        setSearchTerm("");
        setShowSuggestions(false);
      }
    },
    [setShowSuggestions, clearSuggestions]
  );

  // Show suggestions if search term is 3 characters or more.
  useEffect(() => {
    if (searchTerm.length > 2 && !showSuggestions) {
      setShowSuggestions(true);
    }
  }, [searchTerm, showSuggestions]);

  // Clears and hides suggestions if search term is deleted.
  // If search term is more than 3 characters it initiates debounce
  // to retreive suggestions after 600ms
  useEffect(() => {
    if (searchTerm === "") {
      clearSuggestions();
      setShowSuggestions(false);
      return;
    }

    if (searchTerm.length < 3) return;

    const timeOut = setTimeout(() => {
      getSuggestions(searchTerm);
    }, 600);

    return () => clearTimeout(timeOut);
  }, [searchTerm, clearSuggestions, getSuggestions, setShowSuggestions]);

  useEffect(() => {
    if (showSuggestions) {
      window.addEventListener("keydown", handleEscKeyDown);
    }

    return () => window.removeEventListener("keydown", handleEscKeyDown);
  }, [showSuggestions, handleEscKeyDown]);

  return {
    loading,
    searchTerm,
    suggestions,
    showSuggestions,
    searchBarRef,
    setShowSuggestions: useCallback((val: boolean) => setShowSuggestions(val), []),
    setSearchTerm: useCallback((term: string) => setSearchTerm(term), []),
    handleSearchSubmit,
    handleInputChange,
    handleLinkClick,
    handleSearchBarFocus,
  };
};
