
import React, { useState } from 'react';
import { 
  useReactTable, 
  getCoreRowModel, 
  flexRender, 
  getSortedRowModel, 
  ColumnDef, 
  SortingState,
  getPaginationRowModel,
  getFilteredRowModel,
  PaginationState,
  RowData
} from '@tanstack/react-table';
import styles from './StudentTable.module.css';
import { Student } from '../../types/Student';
import TablePagination from '../TablePagination/TablePagination';
import TableControls from '../TableControls/TableControls';

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [tableWidth, setTableWidth] = useState<number | undefined>(undefined);

  const columns: ColumnDef<Student>[] = [
    {
      accessorKey: 'rollNo',
      header: 'Roll No',
      size: 100,
      enableResizing: true,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      size: 200,
      enableResizing: true,
    },
    {
      accessorKey: 'address',
      header: 'Address',
      size: 300,
      enableResizing: true,
    },
    {
      accessorKey: 'email',
      header: 'Email ID',
      size: 250,
      enableResizing: true,
    },
    {
      accessorKey: 'mobile',
      header: 'Mobile No',
      size: 150,
      enableResizing: true,
    },
    {
      accessorKey: 'dob',
      header: 'Date of Birth',
      size: 150,
      enableResizing: true,
    },
  ];

  const table = useReactTable({
    data: students,
    columns,
    state: {
      sorting,
      globalFilter,
      pagination,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: 'onChange',
    onColumnSizingChange: () => {
      // Calculate total width of all columns
      const totalWidth = table.getTotalSize();
      setTableWidth(totalWidth);
    },
  });

  return (
    <div className={styles.tableWrapper}>
      <TableControls 
        globalFilter={globalFilter} 
        setGlobalFilter={setGlobalFilter} 
        table={table}
      />

      <div className={styles.tableContainer}>
        <table 
          className={styles.table}
          style={{ width: tableWidth ? `${tableWidth}px` : '100%' }}
        >
          <thead className={styles.tableHeader}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th 
                    key={header.id}
                    className={styles.tableHeaderCell}
                    style={{ width: `${header.getSize()}px` }}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    <span className={styles.sortIcon}>
                      {{
                        asc: ' ↑',
                        desc: ' ↓',
                      }[header.column.getIsSorted() as string] ?? ''}
                    </span>
                    <div
                      className={`${styles.resizer} ${header.column.getIsResizing() ? styles.isResizing : ''}`}
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                    />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(row => (
                <tr key={row.id} className={styles.tableRow}>
                  {row.getVisibleCells().map(cell => (
                    <td 
                      key={cell.id}
                      className={styles.tableCell}
                      style={{ width: `${cell.column.getSize()}px` }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className={styles.noResults}>
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <TablePagination table={table} />
    </div>
  );
};

export default StudentTable;
