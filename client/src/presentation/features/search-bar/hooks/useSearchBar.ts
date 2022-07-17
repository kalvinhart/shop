import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Product } from "../../../../domain/models/Product";

import HttpService from "../../../../infrastructure/services/HttpService/HttpService";
import ProductService from "../../../../infrastructure/services/ProductService/ProductService";

import { formatOldSearchParams } from "../../../common/utils/formatSearchParams";

export const useSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
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

  const clearSuggestions = useCallback(() => setSuggestions([]), []);

  const handleLinkClick = () => {
    setSearchTerm("");
  };

  const handleInputChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      if (!showSuggestions) setShowSuggestions(true);
      setSearchTerm((e.target as HTMLInputElement).value);
    },
    [showSuggestions]
  );

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

  const handleEscKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSuggestions(false);
      }
    },
    [setShowSuggestions]
  );

  useEffect(() => {
    if (searchTerm === "") {
      clearSuggestions();
      setShowSuggestions(false);
      return;
    }

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
  };
};
