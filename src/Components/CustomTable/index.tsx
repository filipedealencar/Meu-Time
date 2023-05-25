import React, { useRef } from "react";

import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";
import { Table, Tbody, Td, Thead, Tr, WrapperCustomTable } from "./styles";

const CustomTable: React.FC<ICustomTable> = ({
  columns,
  dataDefault,
  columnsSize,
}) => {
  const data = React.useMemo(() => [...dataDefault], []);
  const refCustomTable = useRef<HTMLDivElement>(null);
  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
    <WrapperCustomTable ref={refCustomTable}>
      <Table
        $maxHeight={
          refCustomTable?.current
            ? refCustomTable?.current?.getBoundingClientRect()?.height -
              refCustomTable?.current?.getBoundingClientRect()?.height * 0.2
            : undefined
        }
      >
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{
                      position: "relative",
                      width: `${columnsSize?.[index] ?? 25}%`,
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`resizer ${
                          header.column.getIsResizing() ? "isResizing" : ""
                        }`}
                      ></div>
                    )}
                  </th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td key={cell.id} style={{ width: cell.column.getSize() }}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <div className="h-4" />
    </WrapperCustomTable>
  );
};

export default CustomTable;
