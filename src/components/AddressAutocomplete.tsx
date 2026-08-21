"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, MapPin } from "lucide-react";
import type { AddressSuggestion } from "@/types/address";

type AddressAutocompleteProps = {
  label: string;
  address: string;
  onAddressChange: (address: string) => void;
  onAddressSelect?: (suggestion: AddressSuggestion) => void;
  addressPlaceholder?: string;
  headerAction?: React.ReactNode;
};

export function AddressAutocomplete({
  label,
  address,
  onAddressChange,
  onAddressSelect,
  addressPlaceholder,
  headerAction,
}: AddressAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const skipFetchRef = useRef(false);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [suggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen || skipFetchRef.current) {
      skipFetchRef.current = false;
      return;
    }

    const trimmed = address.trim();
    if (trimmed.length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/place-autocomplete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input: trimmed }),
        });

        const data = await response.json();

        if (response.ok) {
          setSuggestions(data.suggestions ?? []);
        } else {
          setSuggestions([]);
        }
      } catch {
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [address, isOpen]);

  const selectSuggestion = (item: AddressSuggestion) => {
    skipFetchRef.current = true;
    onAddressChange(item.address);
    onAddressSelect?.(item);
    setSuggestions([]);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1,
      );
    } else if (e.key === "Enter" && suggestions[highlightedIndex]) {
      e.preventDefault();
      selectSuggestion(suggestions[highlightedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const showDropdown = isOpen && (isLoading || suggestions.length > 0);

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        {headerAction}
      </div>

      <div className="relative">
        <input
          type="text"
          value={address}
          onChange={(e) => {
            skipFetchRef.current = false;
            onAddressChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={addressPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          autoComplete="off"
        />
        {isLoading && (
          <Loader2
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-gray-400"
          />
        )}
      </div>

      {showDropdown && (
        <ul
          className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          role="listbox"
        >
          {isLoading && suggestions.length === 0 && (
            <li className="px-4 py-3 text-sm text-gray-500">
              Searching addresses...
            </li>
          )}

          {suggestions.map((item, index) => (
            <li
              key={item.placeId}
              role="option"
              aria-selected={index === highlightedIndex}
              className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 ${
                index === highlightedIndex
                  ? "bg-blue-50"
                  : "hover:bg-gray-50"
              }`}
              onMouseDown={(e) => {
                e.preventDefault();
                selectSuggestion(item);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              <div className="flex flex-col items-start gap-2 text-left">
                  <p className=" text-sm text-gray-900">
                    {item.mainText}
                  </p>
                  {item.secondaryText && (
                    <p className="text-sm text-gray-500">
                      {item.secondaryText}
                    </p>
                  )}
                </div>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
