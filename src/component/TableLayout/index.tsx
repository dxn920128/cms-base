import React from 'react'
import { Pagination, Table } from 'antd'
import { getLayoutHeight, getTableHeight } from '../../utils/measureUtils'
import Config from '../../config'
import { TableProps as RcTableProps } from 'rc-table/lib/Table'
import { ColumnsType } from 'antd/lib/table'
import { DefaultRecordType } from 'rc-table/lib/interface'

export interface ITableLayout<RecordType extends DefaultRecordType> {
  total?: number
  columns?: ColumnsType<RecordType>
  onPageChange?: (page: number, pageSize?: number) => void
  dataSource?: RcTableProps<RecordType>['data']
  searchHeight?: number
}
const TableLayout = (props: ITableLayout<any>): JSX.Element => {
  const h = props.searchHeight ? props.searchHeight : 0
  return (
    <div
      className="dis-fl jc-sb fd-c "
      style={{
        height: getLayoutHeight(130 + h)
      }}
    >
      <Table
        dataSource={props.dataSource}
        columns={props.columns}
        className="pdx-16 fl-1"
        size="small"
        pagination={false}
        scroll={{ y: getTableHeight(130 + h) }}
      />
      <div className="dis-fl jc-fe ai-ct pd-16">
        <div className="pdx-24">{`共${props.total}条`}</div>
        <Pagination
          showSizeChanger
          showTitle={false}
          defaultCurrent={Config.DEFAULT_CURRENT_PAGE}
          pageSize={Config.DEFAULE_PAGE_SIZE}
          total={props.total}
          onChange={props.onPageChange}
        />
      </div>
    </div>
  )
}

export default TableLayout
