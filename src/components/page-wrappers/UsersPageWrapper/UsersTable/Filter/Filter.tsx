import React, { useEffect, useRef, useState } from "react";
import styles from "./Filter.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import FilterUsersForm from "@/components/forms/FilterUsersForm/FilterUsersForm";

interface Props {
  startItem: number;
  endItem: number;
  totalItems?: number;
}

const Filter: React.FC<Props> = ({ startItem, endItem, totalItems }) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        spanRef.current?.contains(e.target as Node) ||
        dropDownRef.current?.contains(e.target as Node)
      ) {
        return;
      } else {
        setShowFilter(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    // Cleanup
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      {showFilter && (
        <div ref={dropDownRef} className={styles.formWrapper}>
          <FilterUsersForm />
        </div>
      )}
      <span>Showing</span>
      <span
        ref={spanRef}
        onClick={() => {
          setShowFilter(!showFilter);
        }}
        className={styles.wrapper}
      >
        <span>
          {startItem} to {endItem}{" "}
        </span>
        <IoIosArrowDown />
      </span>
      <span>out of {totalItems}</span>
    </div>
  );
};

export default Filter;
