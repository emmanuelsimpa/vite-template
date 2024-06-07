/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui/table";
import { Button } from "@/common/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: Array<any>;
  meta?: any;
  pagination?: PaginationState;
  setPagination?: any;
}

interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

export function DataTable<TData, TValue>({
  columns,
  data = [],
  meta,
  pagination,
  setPagination,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: meta?.lastPage,
    rowCount: meta?.total,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: { pagination, sorting },
  });

  return (
    <div className="space-y-5">
      <div className="rounded-xl border">
        <div className="border-b">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => {
                  return (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-error h3"
                  >
                    Ooops, no available data !
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        {table.getState()?.pagination?.pageSize && (
          <div className="py-4 px-3 ">
            <div className="flex items-center justify-between px-3 gap-3 bg-[#F0F6FF]">
              <div>
                <p className="caption text-grey-600 !font-light tracking-wide">
                  Showing {table.getRowModel()?.rows?.length?.toLocaleString()}{" "}
                  of {table.getRowCount()?.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center">
                  <p className="caption text-grey-700 !font-light tracking-wide">
                    Rows per page:
                  </p>
                  <Select
                    defaultValue={String(
                      table.getState()?.pagination?.pageSize,
                    )}
                    onValueChange={(e) => {
                      table.setPageSize(Number(e));
                    }}
                  >
                    <SelectTrigger className="w-fit border-none h-fit bg-transparent">
                      <SelectValue className="text-grey-700" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {["10", "15", "20", "30"].map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p className="caption text-grey-700 !font-light tracking-wide">
                    Page {table.getState()?.pagination?.pageIndex + 1} of{" "}
                    {table.getPageCount()?.toLocaleString()}
                  </p>
                </div>
                <div className="space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className={cn(
                      "bg-transparent border-none",
                      !table.getCanPreviousPage() && "cursor-not-allowed",
                    )}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className={cn(
                      "bg-transparent border-none",
                      !table.getCanNextPage() && "cursor-not-allowed",
                    )}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
