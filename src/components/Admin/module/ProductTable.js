'use client'

import * as React from 'react'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnDef
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import Image from 'next/image'
import Link from 'next/link'

function ReusableTable ({
  showIcon = false,
  Route = "",
  data,
  columns,
  filterColumn,
  title
}) {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })

  return (
    <div className='w-full'>
      <div className='flex justify-between place-items-center pb-8'>
        <div className='w-[30%] lg:w-[70%] xl:w-[100%]'>
          <h1 className='text-[20px] font-normal'>{title}</h1>
        </div>
        {/* 🔹 Search filter (if filterColumn is provided) */}
        {filterColumn && (
          <div className='flex items-center w-[100%] gap-4 '>
            <div className='w-[100%] flex place-items-center gap-0 border-[1px] border-gray-100 pl-4 rounded-md'>
              <Image
                alt='add'
                width={0}
                height={0}
                src='/assests/selleradmin/comman/search.svg'
                className='w-[14px] h-[14px]'
              />
              <Input
                placeholder={`Searcy by Product Name, SKU, ID ${filterColumn}...`}
                value={table.getColumn(filterColumn)?.getFilterValue() ?? ''}
                onChange={event =>
                  table
                    .getColumn(filterColumn)
                    ?.setFilterValue(event.target.value)
                }
                className='border-0 focus:none h-[40px]'
              />
            </div>
            {/* <DropdownMenu>
              <DropdownMenuTrigger  asChild>
                <Button variant='outline' className='ml-auto h-[40px]'>
                  Filter <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={'bg-white hover:bg-white'}
                align='end'
              >
                {table
                  .getAllColumns()
                  .filter(column => column.getCanHide())
                  .map(column => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className='capitalize'
                        checked={column.getIsVisible()}
                        onCheckedChange={value =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu> */}
            <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' className=' h-[40px] px-[15px] cursor-pointer'>
                  Filter 
                </Button>
      </SheetTrigger>
      <SheetContent>
        
      </SheetContent>
    </Sheet>
            {showIcon && (
              <Button className='rounded-md bg-[#8225AF] h-[40px]'>
               <Link href={Route}>
                  <Image
                    alt='add'
                    width={0}
                    height={0}
                    src='/assests/selleradmin/comman/plusicon.svg'
                    className='w-[24px] h-[24px]'
                  />
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>

      {/* 🔹 Table */}
      <div className='overflow-hidden rounded-md border'>
        <Table >
          <TableHeader className="px-[10px] lg:px-[45px] py-[5px] lg:py-[10px]">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow  key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead className="px-[20px]"  key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody  >
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow 
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell className="px-[20px]" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* 🔹 Pagination + Info */}
      <div className='flex items-center justify-end space-x-2 py-4'>
        <div className='text-muted-foreground flex-1 text-sm'>
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReusableTable
