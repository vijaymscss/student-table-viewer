
import React from 'react';
import { Table } from '@tanstack/react-table';
import styles from './TablePagination.module.css';

interface TablePaginationProps {
  table: Table<any>;
}

const TablePagination: React.FC<TablePaginationProps> = ({ table }) => {
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationInfo}>
        Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{' '}
        {Math.min(
          (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
          table.getFilteredRowModel().rows.length
        )}{' '}
        of {table.getFilteredRowModel().rows.length} entries
      </div>

      <div className={styles.paginationButtons}>
        <button
          className={styles.paginationButton}
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className={styles.paginationButton}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        
        <div className={styles.pageNumbers}>
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <button
              key={i}
              className={`${styles.pageNumber} ${
                i === table.getState().pagination.pageIndex ? styles.activePage : ''
              }`}
              onClick={() => table.setPageIndex(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          className={styles.paginationButton}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className={styles.paginationButton}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
