
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
