
import React, { useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel, ColumnDef, SortingState } from '@tanstack/react-table';
import styles from './StudentTable.module.css';
import { Student } from '../../types/Student';

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns: ColumnDef<Student>[] = [
    {
      accessorKey: 'rollNo',
      header: 'Roll No',
      size: 100,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      size: 200,
    },
    {
      accessorKey: 'address',
      header: 'Address',
      size: 300,
    },
    {
      accessorKey: 'email',
      header: 'Email ID',
      size: 250,
    },
    {
      accessorKey: 'mobile',
      header: 'Mobile No',
      size: 150,
    },
    {
      accessorKey: 'dob',
      header: 'Date of Birth',
      size: 150,
    },
  ];

  const table = useReactTable({
    data: students,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
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
          {table.getRowModel().rows.map(row => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
