
import React from 'react';
import { Table } from '@tanstack/react-table';
import styles from './TablePagination.module.css';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { ChevronFirst, ChevronLast } from 'lucide-react';

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

      <Pagination>
        <PaginationContent className={styles.paginationNav}>
          <PaginationItem>
            <PaginationLink 
              className={styles.paginationButton}
              onClick={() => table.setPageIndex(0)} 
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronFirst className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationPrevious 
              className={styles.paginationButton}
              onClick={() => table.previousPage()} 
              disabled={!table.getCanPreviousPage()}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext 
              className={styles.paginationButton}
              onClick={() => table.nextPage()} 
              disabled={!table.getCanNextPage()}
            />
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink 
              className={styles.paginationButton}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)} 
              disabled={!table.getCanNextPage()}
            >
              <ChevronLast className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TablePagination;
