
import React from 'react';
import { Table } from '@tanstack/react-table';
import styles from './TableControls.module.css';

interface TableControlsProps {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  table: Table<any>;
}

const TableControls: React.FC<TableControlsProps> = ({ 
  globalFilter, 
  setGlobalFilter,
  table 
}) => {
  return (
    <div className={styles.controlsContainer}>
      <div className={styles.pageSize}>
        <label htmlFor="page-size">Show</label>
        <select
          id="page-size"
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value));
          }}
          className={styles.pageSizeSelect}
        >
          {[5, 10, 20, 30, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <span>entries</span>
      </div>

      <div className={styles.search}>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          value={globalFilter ?? ''}
          onChange={e => setGlobalFilter(e.target.value)}
          placeholder="Search all columns..."
          className={styles.searchInput}
        />
      </div>
    </div>
  );
};

export default TableControls;
