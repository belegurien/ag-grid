// Type definitions for ag-grid v3.3.0-alpha.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { Grid } from "./grid";
import RowRenderer from "./rendering/rowRenderer";
import HeaderRenderer from "./headerRendering/headerRenderer";
import FilterManager from "./filter/filterManager";
import { ColumnController } from "./columnController/columnController";
import InMemoryRowController from "./rowControllers/inMemoryRowController";
import SelectionController from "./selectionController";
import GridOptionsWrapper from "./gridOptionsWrapper";
import GridPanel from "./gridPanel/gridPanel";
import ValueService from "./valueService";
import MasterSlaveService from "./masterSlaveService";
import EventService from "./eventService";
import FloatingRowModel from "./rowControllers/floatingRowModel";
import CsvExportParams from "./csvCreator";
import { ColDef } from "./entities/colDef";
import { RowNode } from "./entities/rowNode";
export declare class GridApi {
    private grid;
    private rowRenderer;
    private headerRenderer;
    private filterManager;
    private columnController;
    private inMemoryRowController;
    private selectionController;
    private gridOptionsWrapper;
    private gridPanel;
    private valueService;
    private masterSlaveService;
    private eventService;
    private floatingRowModel;
    private csvCreator;
    constructor(grid: Grid, rowRenderer: RowRenderer, headerRenderer: HeaderRenderer, filterManager: FilterManager, columnController: ColumnController, inMemoryRowController: InMemoryRowController, selectionController: SelectionController, gridOptionsWrapper: GridOptionsWrapper, gridPanel: GridPanel, valueService: ValueService, masterSlaveService: MasterSlaveService, eventService: EventService, floatingRowModel: FloatingRowModel);
    /** Used internally by grid. Not intended to be used by the client. Interface may change between releases. */
    __getMasterSlaveService(): MasterSlaveService;
    getDataAsCsv(params?: CsvExportParams): string;
    exportDataAsCsv(params?: CsvExportParams): void;
    setDatasource(datasource: any): void;
    onNewDatasource(): void;
    setRowData(rowData: any): void;
    setRows(rows: any): void;
    onNewRows(): void;
    setFloatingTopRowData(rows: any[]): void;
    setFloatingBottomRowData(rows: any[]): void;
    onNewCols(): void;
    setColumnDefs(colDefs: ColDef[]): void;
    unselectAll(): void;
    refreshRows(rowNodes: RowNode[]): void;
    refreshCells(rowNodes: RowNode[], colIds: string[]): void;
    rowDataChanged(rows: any): void;
    refreshView(): void;
    softRefreshView(): void;
    refreshGroupRows(): void;
    refreshHeader(): void;
    isAnyFilterPresent(): boolean;
    isAdvancedFilterPresent(): boolean;
    isQuickFilterPresent(): boolean;
    getModel(): any;
    onGroupExpandedOrCollapsed(refreshFromIndex: any): void;
    expandAll(): void;
    collapseAll(): void;
    addVirtualRowListener(eventName: string, rowIndex: number, callback: Function): void;
    setQuickFilter(newFilter: any): void;
    selectIndex(index: any, tryMulti: any, suppressEvents: any): void;
    deselectIndex(index: number, suppressEvents?: boolean): void;
    selectNode(node: any, tryMulti?: boolean, suppressEvents?: boolean): void;
    deselectNode(node: any, suppressEvents?: boolean): void;
    selectAll(): void;
    deselectAll(): void;
    recomputeAggregates(): void;
    sizeColumnsToFit(): void;
    showLoadingOverlay(): void;
    showNoRowsOverlay(): void;
    hideOverlay(): void;
    showLoading(show: any): void;
    isNodeSelected(node: any): boolean;
    getSelectedNodesById(): {
        [nodeId: number]: RowNode;
    };
    getSelectedNodes(): RowNode[];
    getSelectedRows(): any[];
    getBestCostNodeSelection(): any;
    getRenderedNodes(): any[];
    ensureColIndexVisible(index: any): void;
    ensureIndexVisible(index: any): void;
    ensureNodeVisible(comparator: any): void;
    forEachInMemory(callback: Function): void;
    forEachNode(callback: Function): void;
    forEachNodeAfterFilter(callback: Function): void;
    forEachNodeAfterFilterAndSort(callback: Function): void;
    getFilterApiForColDef(colDef: any): any;
    getFilterApi(key: any): any;
    getColumnDef(key: any): ColDef;
    onFilterChanged(): void;
    setSortModel(sortModel: any): void;
    getSortModel(): any;
    setFilterModel(model: any): void;
    getFilterModel(): any;
    getFocusedCell(): any;
    setFocusedCell(rowIndex: any, colIndex: any): void;
    setHeaderHeight(headerHeight: number): void;
    showToolPanel(show: any): void;
    isToolPanelShowing(): boolean;
    doLayout(): void;
    getValue(colDef: ColDef, data: any, node: any): any;
    addEventListener(eventType: string, listener: Function): void;
    addGlobalListener(listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    removeGlobalListener(listener: Function): void;
    dispatchEvent(eventType: string, event?: any): void;
    refreshRowGroup(): void;
    destroy(): void;
}
